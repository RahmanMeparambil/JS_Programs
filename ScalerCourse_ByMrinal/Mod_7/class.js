class Person{
    constructor(_name,_age){
        this.name = _name
        this.age = _age
    }
    display(){
        console.log(`Name : ${this.name} \t Age :${this.age}`)
    }
}
class Teacher extends Person{
    constructor(_name,_age,_classStrength){
        super(_name,_age)
        this.cs = _classStrength
    }
}
class Student extends Person{
    constructor(_name,_age,_cgpa){
        super(_name,_age)
        this.cgpa = _cgpa
    }
}
t1 = new Teacher('rahman',25,40)
console.log(t1)