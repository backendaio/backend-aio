const esprima = require('esprima');
const escodegen = require('escodegen');
const fs = require('fs');
const { deob_string } = require('./px_deob_string.js');

var source = fs.readFileSync('./px_source.js', 'utf8');

function Literal(node){

	return (node.type == 'Literal');

};

function deob(){

	esprima.parse(source , {} , (node,meta) => {
		try{

			if(Literal(node)){
				if(node['value'].startsWith('CG')){
					node['value'] = deob_string(node['value']);
				};
			};
		} catch {};

		source = escodegen.generate(node);
	});

	fs.writeFileSync('./px_deobfuscated.js', source, 'utf8');

};

deob();