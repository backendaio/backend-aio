const esprima = require('esprima');
const escodegen = require('escodegen');
const fs = require('fs');
var source; 
var value = [];
var array = [];
var name = [];
var switches_locations = [];
var initial_states = [];

function ForStatement(node){

	return (node.type == 'ForStatement');

};

function Literal(node){

	return (node.type == 'Literal');

};

function VariableDeclaration(node){

	return (node.type == 'VariableDeclaration');

};

function AssignmentExpression(node){

	return (node.type == 'AssignmentExpression');

};

function read_file(){

	source = fs.readFileSync('./deob_source.js', 'utf8');

};

function restore_string(){

	esprima.parse(source, {}, (node,meta) => {

		if(Literal(node)){

			node['raw'] = node['value'];
			//value.push(node['value']);

		};

		source = escodegen.generate(node);

	});

};

function replace_AssignmentExpression_1(){

	esprima.parse(source, {}, (node,meta) => {

		try{

			if(AssignmentExpression(node)){

				//console.log(node['right']['value']);

				if(node.operator == '=' && node.left && node.right.type == 'Literal' && node.left.object && node.left.property.name){

					array.push(source.substring(meta.start.offset, meta.end.offset) + ';');
					value.push(node['right']['value']);
					name.push(node.left.object.name + '.' + node.left.property.name);
					//console.log(source.substring(meta.start.offset, meta.end.offset));
					//console.log(node.left.object.name + '.' + node.left.property.name);
					//console.log(node['right']['value']);
					//source = source.replaceAll(node.left.object.name + '.' + node.left.property.name, node['right']['value']);
					//source = source.replaceAll(`${node['right']['value']} = '${node['right']['value']}';`, '');

				};

			};

		} catch {};

	});

	array.forEach((element, index, array) => {

		source = source.replaceAll(element, '');
		source = source.replaceAll(name[index], value[index]);
		source = source.trim();

	});

	esprima.parse(source, {}, (node,meta) => {

		source = escodegen.generate(node);

	});

};

function collect_control_flow(){

	esprima.parse(source, {}, (node,meta) => {

		if(VariableDeclaration(node)){

			try{

				//console.log(node.declarations[0]);
				//console.log(source.substring(meta.start.offset, meta.end.offset));
				initial_states.push({ name : node.declarations[0].id.name, value : node.declarations[0].init.value, range : [meta.start.offset, meta.end.offset] });

			} catch {};

		};

		if(ForStatement(node)){

			try{

				if(node.body.body[0]['type'] == 'SwitchStatement'){

					switches_locations.push([meta.start.offset, meta.end.offset]);

				};

			} catch {};
		};

	});

};

function simplify_control_flow(){

	esprima.parse(source, { range : true }, (node,meta) => {

		if(ForStatement(node)){

			need_to_replace = source.substring(node.range[0], node.range[1]);
			//console.log(need_to_replace);

			try{

				initial_value = initial_states.find(b => b.name == node.body.body[0].discriminant.name);
				//console.log(node.body.body[0].discriminant.name);
				case_count = node.body.body[0].cases.length; 
				//console.log(initial_value);

				if(case_count == 1){

					//console.log(node.body.body[0].cases[0].consequent[0]);
					//console.log(source.substring(node.body.body[0].cases[0].range[0], node.body.body[0].cases[0].range[1]));
					//console.log(source.substring(node.body.body[0].cases[0].consequent[0].range[0], node.body.body[0].cases[0].consequent[0].range[1]));
					to_replace = '';
					node.body.body[0].cases[0].consequent.map(b => {

						if(b['type'] != 'BreakStatement'){

							//console.log(source.substring(b.range[0], b.range[1]));
							to_replace += source.substring(b.range[0], b.range[1]);

						};

					});

					//console.log(source.substring(initial_value.range[0], initial_value.range[1]));
					//source = source.replace(source.substring(initial_value.range[0], initial_value.range[1]), '');
					//source = source.replaceAll(need_to_replace, to_replace);

				};

			} catch {};

		};

		source = escodegen.generate(node);

	});

};

function write_file(){

	fs.writeFileSync('./deobfuscated_source.js', source, 'utf8');

};

async function deob(){

	await read_file(); 
	await restore_string();
	await replace_AssignmentExpression_1();
	await collect_control_flow();
	await simplify_control_flow();
	await write_file();

};

deob();