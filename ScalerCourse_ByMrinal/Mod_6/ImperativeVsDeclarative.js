// imperative way of programming
let a = 2
let asquare = a*a

function isEven(a){
    return asquare%2 == 0
}

res = isEven(a)
console.log('Imperative Programming : ',res)


// declarative Programming
isEven = a => asquare%2==0 ? true:false
res = isEven(a)
console.log('Declarative Programming : ',res)