// function to print helloworld
function hellow(){
    console.log('heloworld')
}
console.log('function1 : ')
hellow()

// function that is assigned to a variable
let add = function(a,b){
    return a+b
}
console.log('addition function : '+add(2,3))

// lexical scope
function lexicalScopedFunction(){
    let a = 10
    function display(){
        console.log('lexicalScoped function : '+a)
    }
    return display()
}
lexicalScopedFunction()
// hoisting
console.log('Hoisting : ');
console.log(a);
fun1();
var a = 10
function fun1(){
    console.log('helloWorld')
}

// arrow function 
let add1 = (a,b)=>{
    return a+b
}
console.log('arrow function 1 : '+add1(2,3))


