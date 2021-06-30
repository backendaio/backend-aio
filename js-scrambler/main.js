const esprima = require('esprima');
const escodegen = require('escodegen');
const fs = require('fs');

var source, source_ast, for_statement_location, value, case_length, body, initial_variable, initial_value, case_value, has_return, assign_location, current_case, next_case, first_index, new_source;

function Literal(node){

	return (node.type == 'Literal');

};

function BlockStatement(node){

	return (node.type == 'BlockStatement');

};

function ForStatement(node){

	return (node.type == 'ForStatement');

};

function VariableDeclarator(node){

	return (node.type == 'VariableDeclarator');

};

function is_control_flow(node){

	return (node.type == 'BlockStatement')
		&&(node.body.find(b => b.type == 'ForStatement'))
			&&(node.body.find(b => b.type == 'ForStatement').body.body[0].type == 'SwitchStatement');

};

async function read_file(done){

	if(done){	

		console.log('read file successfully');
		return;

	};

	console.log('reading file');

	try {

		source = await fs.readFileSync('./source.js', 'utf8');
		done = true;

	} catch {

		console.log('failed to read file');
	};

	await read_file(done);

};

async function write_file(done){

	if(done){	

		console.log('wrote file successfully');
		return;

	};

	console.log('writting file');

	try {

		await fs.writeFileSync('./deofuscated.js', new_source, 'utf8');
		done = true;

	} catch {

		console.log('failed to write file');
	};

	await write_file(done);

};

async function restore_literal(done){

	if(done){

		console.log('restored literal successfully');
		return;

	};

	console.log('restoring literal');

	try{


		await esprima.parse(source, {}, async (node,meta) => {

			if(await Literal(node)){

				node['raw'] = node['value'];

			};

			source = await escodegen.generate(node);

		});

		done = true;

	} catch {

		console.log('failed to restore litral');

	};

	await restore_literal(done);

};

async function collect_discriminant(done){

	if(done){

		console.log('collected all discriminant successfully');
		return;

	};

	console.log('collecting discriminant');

	value = {};

	try{


		await esprima.parse(source, { range : true }, async (node,meta) => {

			try{

				if(await VariableDeclarator(node)){

					if(node.id.name && typeof node.init.value == 'number'){

						value[node.id.name] = node.init.value;
						done = true;

					};

				};

			} catch {

				done = false;

			};

		});

	} catch {

		console.log('failed to collect discriminant');
		done = false;

	};
	
	await collect_discriminant(done);

};

async function follow_control_flow(initial_state, current_stage, switch_variable_name, node, body = [] ,done = false){

	current_case = await node.body.find(b => b.type == 'ForStatement'); 
	current_case = current_case.body.body[0].cases;
	current_case = current_case.find(b => b.test.value == current_stage);
	has_return = current_case.consequent.find(b => b.type == 'ReturnStatement');

	//console.log(switch_variable_name);
	
	if(!has_return){

		case_length = current_case.consequent.length; 
		current_case.consequent = current_case.consequent.slice(0, case_length - 1);

		if(case_length > 1){

			current_case.consequent.forEach((element, index, array) => {

				try {

					//console.log(element);

					if(element.expression.type == 'AssignmentExpression' && element.expression.left.name == switch_variable_name){

						assign_location = index;

					} else if(element.expression.left.name == switch_variable_name && element.expression.right.type == 'ConditionalExpression'){

						assign_location = index;

					};

				} catch {};

			});

		} else {

			assign_location = 0;
		};

		//console.log(assign_location);
		//console.log(current_case.consequent[assign_location]['range']);
		console.log(source.substring(current_case.consequent[assign_location]['range'][0], current_case.consequent[assign_location]['range'][1]));

		if(current_case.consequent[assign_location].expression.right && !current_case.consequent[assign_location].expression.right.consequent && !current_case.consequent[assign_location].expression.right.alternate){

			current_stage = current_case.consequent[assign_location].expression.right.value;
			current_case.consequent.splice(assign_location, 1);
			current_case.consequent.map(b => {

				body.push(b);

			});

		} else {

		};

	};

};

async function simplify_control_flow(){

	await esprima.parse(source, { range : true }, async (node,meta) => {

		try{

			if(await is_control_flow(node)){

				first_index = false; 

				try {

					first_index = node.body[1].body.body[0].type == 'SwitchStatement'; 

				} catch {};

				if(first_index && node.body[1].body.body[0].cases.length == 1){

					initial_variable = node.body[1].body.body[0].discriminant.name;
					case_value = node.body[1].test.right.value;
					has_return = node.body[1].body.body[0].cases[0].consequent.find(b => b.type == 'ReturnStatement');

					if(has_return){

						case_length = node.body[1].body.body[0].cases[0].consequent.length;
						node.body[1].body.body[0].cases[0].consequent = node.body[1].body.body[0].cases[0].consequent.slice(0, case_length - 1);
						node.body = node.body[1].body.body[0].cases[0].consequent;

					} else {

						await node.body[1].body.body[0].cases[0].consequent.forEach((element, index, array) => {

						try {

							if(element.expression.left.name == initial_variable){

								assign_location = index;
								node.body[1].body.body[0].cases[0].consequent.splice(assign_location, 1);
								case_length = node.body[1].body.body[0].cases[0].consequent.length;
								node.body[1].body.body[0].cases[0].consequent = node.body[1].body.body[0].cases[0].consequent.slice(0, case_length - 1);
								node.body = node.body[1].body.body[0].cases[0].consequent;

							};

						} catch {};

						});

					};


				} else if (!first_index || node.body[1].body.body[0].cases.length != 1){

					initial_variable = await node.body.find(b => b.type == 'ForStatement').body.body[0].discriminant.name;
					initial_value = value[initial_variable];

					await follow_control_flow(initial_value, initial_value, initial_variable, node, []);

				};

			};

			new_source = await escodegen.generate(node);

		} catch {};

	});

};

async function main(){

	console.time('time');

	await read_file();
	await restore_literal();
	await collect_discriminant();
	await simplify_control_flow();
	await write_file();

	console.timeEnd('time');

};

main();