let res = {}
let disp = document.getElementById('display')
let oprand = "";

// button elements
let b1 = document.querySelector(".b1")
let b2 = document.querySelector(".b2")
let b3 = document.querySelector(".b3")
let b4 = document.querySelector(".b4")
let b5 = document.querySelector(".b5")
let b6 = document.querySelector(".b6")
let b7 = document.querySelector(".b7")
let b8 = document.querySelector(".b8")
let b9 = document.querySelector(".b9")
let badd = document.querySelector(".badd")
let bsub = document.querySelector(".bsub")

function dcreation(v){
    oprand+=v
    disp.innerHTML = oprand
}



b1.addEventListener('click',function display1(){
    return dcreation(1)
})
b2.addEventListener('click',function display2(){
    return dcreation(2)
})
b3.addEventListener('click',function display3(){
    return dcreation(3)
})
b4.addEventListener('click',function display4(){
    return dcreation(4)
})
b5.addEventListener('click',function display5(){
    return dcreation(5)
})
b6.addEventListener('click',function display6(){
    return dcreation(6)
})
b7.addEventListener('click',function display7(){
    return dcreation(7)
})
b8.addEventListener('click',function display8(){
    return dcreation(8)
})
b9.addEventListener('click',function display9(){
    return dcreation(9)
})
badd.addEventListener('click',function display(){
    return dcreation('+')
})
bsub.addEventListener('click',function display(){
    return dcreation('-')
})