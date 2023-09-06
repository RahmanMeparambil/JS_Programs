// Impure Function
let a = 10
function impure(x){
    console.log(a+x)
    a++
}
impure(2)
impure(2)
impure(2)
impure(2)

// Pure Function
function pure(a,x){
    return a+x
}
console.log(pure(a,2))
console.log(pure(a,2))
console.log(pure(a,2))
