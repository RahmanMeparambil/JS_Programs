const fs = require('fs')

console.log('SYNC')
let data = fs.readFileSync('text1.txt')
console.log(data)
console.log('changing Buffer object .. ')
let data1 = fs.readFileSync('text1.txt','utf8')
console.log(data1)

console.log('\nASYNC')


fs.readFile('text1.txt', 'utf8', cb1);
fs.readFile('text2.txt', 'utf8', cb2);
fs.readFile('text3.txt', 'utf8', cb3);

function cb1(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('cb1:', data);
    }
}

function cb2(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('cb2:', data);
    }
}

function cb3(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('cb3:', data);
        fs.readFile('text1.txt', 'utf8', cb4);
    }

}
function cb4(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('Files are printing randomly .. ') // Serial Execution
        console.log('cb4:', data);

        fs.readFile('text2.txt', 'utf8', cb5);
    }

}
function cb5(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('cb5:', data);

        fs.readFile('text3.txt', 'utf8', cb6);
    }

}
function cb6(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('cb6:', data);
        
    }

}





