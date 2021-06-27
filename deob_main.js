const esprima = require('esprima');
const escodegen = require('escodegen');
const fs = require('fs');
var source; 
var value = [];

function Literal(node){
	return (node.type == 'Literal');
};

function read_file(){

	source = fs.readFileSync('./deob_source.js', 'utf8');

};

function restore_string(){

	esprima.parse(source, {}, (node,meta) => {
		if(Literal(node)){
			node['raw'] = node['value'];
			value.push(node['value']);
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
	await write_file();
	value = new Set(value);
	value = Array.from(value);
	value.map(b => {
		console.log(b);
	});
};

deob();