// Primitive Data Type
let s = 'hello'
b = s
s= 'world'
console.log(b,s)

// Reference Data Type
let obj = {
    name:'rahman'
}
let a = obj
obj.name = 'ramzan'
console.log(obj,a)

// Fix
obj.name = 'rahman'
a = { ...obj}
console.log('shallowCopy',a)

// Problem with shallowCopy
let obj2 = {
    name:'rahman',
    obj3 :{
        street:'kdy',
        country:'India'
    }
}
a = { ...obj2}
console.log('before changing the value on shallow copy')
console.log(a)
obj2.obj3.street = 'Kondotty'
console.log('after changin the value on shallow copy')
console.log('shallowCopy',a)

// fix 
obj2.obj3.street= 'kdy'
a = JSON.parse(JSON.stringify(obj2))

console.log('DeepCopied object ',a)