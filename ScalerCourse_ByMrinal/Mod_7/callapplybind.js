let obj1 = {
    name:'rahman',
    age:25,
    displayDetails : function(){
        console.log(`Name is ${this.name} and Age is ${this.age}`)
    }
}
let obj2 = {
    name:'arman',
    age:25,

}
console.log('CALL')
console.log('Obj1 function is called for Obj2')
obj1.displayDetails.call(obj2)

obj1 = {
    name:'rahman',
    age:25,
}

obj2 = {
    name:'arman',
    age:25,

}
function displayDetails(place){
    console.log(`Name is ${this.name} and Age is ${this.age} and place is ${place}`)
}

console.log('\nDisplay Details is removed from the function Obj1 , Global function is created .. ')
displayDetails.call(obj1,'Kerala')
displayDetails.call(obj2,'Bangalore')

console.log('\nAPPLY')
displayDetails.call(obj1,['Kerala'])
displayDetails.call(obj2,['Bangalore'])

console.log('\nBIND')
let f = displayDetails.bind(obj1,'kerala')
console.log(f)
// f()