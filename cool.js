const esprima = require('esprima');
const fs = require('fs');
var source = fs.readFileSync('./jsscrambler.js', 'utf8');
var value = [];

function Literal(node){

	return (node.type == 'Literal');

};

function parse(){

	esprima.parse(source, {}, (node,meta) => {

		if(Literal(node)){

			value.push(node['value']);

		};

	});

};

async function main(){

	await parse();
	value = new Set(value);
	value = Array.from(value);
	
	value.map(b => {

		try{

			if(typeof b != 'number' && b.length < 100){
				console.log(b);
			};

		} catch {};

	});

};

main();