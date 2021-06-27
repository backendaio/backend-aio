const esprima = require('esprima');
const escodegen = require('escodegen');
const fs = require('fs');

var file_1 = fs.readFileSync('./snipes_usa_px_deobfuscated.js', 'utf8');
var file_2 = fs.readFileSync('./ssense_px_deobfuscated.js', 'utf8');
var file_1_total_function = 0;
var file_2_total_function = 0;
var file_1_function_range = []; 
var file_2_function_range = [];
var file_1_function_length = [];
var file_2_function_length = [];
var file_1_literal = [];
var file_2_literal = [];
var found_changes_literal = false;
var found_changes_index = false;

function FunctionDeclaration(node){

	return (node.type == 'FunctionDeclaration');

};

function Literal(node){

	return (node.type == 'Literal');

};

function check_diff(){

	esprima.parse(file_1, { range : true }, (node,meta) => {

		if(Literal(node)){

			file_1_literal.push(node['value']);
		};

		if(FunctionDeclaration(node)){

			file_1_total_function++; 
			file_1_function_range.push(node['range']);

		};

	});

	esprima.parse(file_2, { range : true }, (node,meta) => {

		if(Literal(node)){

			file_2_literal.push(node['value']);
		};

		if(FunctionDeclaration(node)){

			file_2_total_function++; 

			file_2_function_range.push(node['range']);
		};

	});

	if(file_2_total_function > file_1_total_function){

		console.log(`file_2 has ${file_2_total_function - file_1_total_function} function(s) more than file_1.`);

	} else if(file_2_total_function < file_1_total_function){

		console.log(`file_1 has ${file_1_total_function - file_2_total_function} function(s) more than file_2.`);

	} else {

		console.log('file_2 and file_1 have the same amount of function(s).');

	};

	file_1_function_range.forEach((element, index, array) => {

		file_1_function_length.push(element[1] - element[0]);

	});

	file_2_function_range.forEach((element, index, array) => {

		file_2_function_length.push(element[1] - element[0]);

	});

	if(file_2_total_function < file_1_total_function){

		file_1_function_length.forEach((element, index, array) => {

			if(element != file_2_function_length[index]){

				if(!found_changes_index){

					console.log(`change(s) occured after ${index} function(s).`);

				};

				found_changes_index  = true;

			} else if(file_1_total_function != file_2_total_function && index == element){

				if(!found_changes_index){

					console.log(`change(s) occured after ${index} function(s).`);

				};

				found_changes_index  = true;

			};

		});

	} else if(file_2_total_function > file_1_total_function){

		file_2_function_length.forEach((element, index, array) => {

			if(element != file_1_function_length[index]){

				if(!found_changes_index){

					console.log(`change(s) occured after ${index} function(s).`);
					
				};

				found_changes_index  = true;
				
			} else if(file_1_total_function != file_2_total_function && index == element){

				console.log(`change(s) occured after ${index} function(s).`);
				
			};

		});

	};

	if(file_1_literal.length > file_2_literal.length){

		console.log(`file_1 has ${file_1_literal.length - file_2_literal.length} literal(s) more than file_2.`);

		for(var i = 0; i < file_2_literal.length - 1; i++){

			if(file_1_literal[i] != file_2_literal[i]){

				if(!found_changes_literal){

					console.log(`noticed changes in value after ${i} literal(s).`);
					
				};

				found_changes_literal = true;

			};

			if(i == file_2_literal.length - 1){

				if(!found_changes_literal){

					console.log(`noticed changes in value after ${i} literal(s).`);
					
				};

				found_changes_literal = true;

			};

		};

	} else if(file_1_literal.length < file_2_literal.length){

		console.log(`file_2 has ${file_2_literal.length - file_1_literal.length} literal(s) more than file_1.`);

		for(var i = 0; i < file_1_literal.length - 1; i++){

			if(file_1_literal[i] != file_2_literal[i]){

				if(!found_changes_literal){

					console.log(`noticed changes in value after ${i} literal(s).`);

				};

				found_changes_literal = true;

			};

			if(i == file_1_literal.length - 1){

				if(!found_changes_literal){

					console.log(`noticed changes in value after ${i} literal(s).`);
					
				};

				found_changes_literal = true;

			};

		};
		
	} else {

		console.log('file_2 and file_1 have the same amount of literal(s).');

		for(var i = 0; i < file_1_literal.length - 1; i++){

			if(file_1_literal[i] != file_2_literal[i]){

				if(!found_changes_literal){

					console.log(`noticed changes in value after ${i} literal(s).`);
					
				};

				found_changes_literal = true;

			};

			if(i == file_1_literal.length - 1 && file_1_literal[i] != file_2_literal[i]){

				if(!found_changes_literal){

					console.log(`noticed changes in value after ${i} literal(s).`);
					
				};

				found_changes_literal = true;

			};

		};

	};

};

check_diff();
