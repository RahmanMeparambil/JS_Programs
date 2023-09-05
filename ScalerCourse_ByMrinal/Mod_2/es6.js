console.log(`Multi
line 
command`)

// printing age in three different ways
let age = 25
console.log('my age is',age)
console.log(`my age is ${age}`)
console.log('my age is '+age)


// destructuring assignment
let [a,b,c] = [1,2,3]
console.log(a,b,c)

let myObj = {
    name:'Adam',
    age:25,
    gender:'M',
    address:{
        city:'Malappuram'
    }
}

// destructuring and changing name
let {name:Name,gender,address:{city:City}} = myObj
console.log(Name,City)