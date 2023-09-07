let obj1 = {
    name : 'rahman'
}
let obj2 = obj1
console.log(obj1)
console.log(obj2)
// changin parameter or obj1
console.log('changing parameter of obj1')
obj1.name ='Ramzan'
console.log(obj1) 
console.log(obj2)
// objects are reference type
console.log('\nFIX')
obj2 = {obj1}
obj1.name = 'rahman'
console.log(obj1)