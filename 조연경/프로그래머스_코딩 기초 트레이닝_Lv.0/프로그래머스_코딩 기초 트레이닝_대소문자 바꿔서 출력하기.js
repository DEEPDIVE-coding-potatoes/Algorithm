const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    let result ='';
    for (let i = 0; i< str.length; i++){
        let char = str[i];
        
        if(char === char.toLowerCase()){
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase(); 
        }
    }
    
    console.log(result); 
    
});