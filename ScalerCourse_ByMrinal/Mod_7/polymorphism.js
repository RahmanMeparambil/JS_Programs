class Animal{
    sound(){
        console.log('Animal Sound')
    }
}
class Dog{
    sound(){
        console.log('Dog Barks')
    }
}

d = new Dog()
d.sound()
a = new Animal()
a.sound()