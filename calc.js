const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	let x = 4;
	let ansr;

	switch (mathSymbol){
		case `+`: 
		ansr = num1 + num2;
		break;

		case `-`: 
		ansr = num1 - num2;
		break;

		case `*`: 
		ansr = num1 * num2;
		break;

		case `/`: 
		ansr = num1 / num2;
		break;

		case `sqrt`: 
		ansr = Math.sqrt(num1);
		break;

		default:
		ansr = `Niether`;
	}

console.log(ansr);
	// This line closes the connection to the command line interface.
	reader.close()

});
