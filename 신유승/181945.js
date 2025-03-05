const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}).on('line', function (line) {
  let arr = line.split('');
  arr.forEach((c) => {
    console.log(c);
  });
});