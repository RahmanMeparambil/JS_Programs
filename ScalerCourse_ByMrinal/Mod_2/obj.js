let Person = {
    name:'rahman',
    age:24,
    job:'Engineer at Amazon'
}
console.log('Our Object')
console.log(Person)

// updating the object
console.log('Updating the object')
Person.age = 25
console.log(Person)

// deleting the attributes of the object
delete Person.age
console.log('Age attribute is deleted')
console.log(Person)

// adding the attribute date
Person.Bdate = '28/05/1998'
console.log('Adding the attribute date')
console.log(Person)

// this is a nested object
Person.Address = {
    country:'India',
    city:'Malappuram',
    street:'Kondotty',
}
console.log('nested object')
console.log(Person)