const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}).on('line', function (line) {
  Number(line) % 2 === 0 ? console.log(line + ' is even') : console.log(line + ' is odd');
});