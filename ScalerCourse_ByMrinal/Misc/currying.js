function add(a){
    function add1(b){
        console.log(a+b)
    }
    return add1
}
let res = add(3)
console.log(res)
res(10)