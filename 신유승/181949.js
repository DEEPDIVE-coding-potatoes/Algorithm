const readline = require('readline'); 19
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}).on('line', function (line) {
  let arr = [];
  for (let i = 0; i < line.length; i++) {
    if (line[i] === line[i].toUpperCase()) {
      arr.push(line[i].toLowerCase());
    } else {
      arr.push(line[i].toUpperCase());
    }
  }
  console.log(arr.join(""));
});