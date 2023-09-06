function Person(_name,_age){
    this.name = _name
    this.age = _age
    this.display = function(){
        console.log(`name : ${this.name} age : ${this.age}`)
    }
}
// object creation
let Abi = new Person('Abhinav',25)
Abi.display()