function fun(_name){
    var name = _name
    this.display = function(){
        console.log('constructor fucntion :',name)
    }
}

f = new fun('rahmsn')
console.log('trying to access',f.name)
f.display()

// Classical Encapsulation
class enc{
    #name;
    constructor(_name){
        this.#name = _name
    }
    getName(){
        console.log('classical function :',this.#name)
    }
}
e = new enc('rahman')
console.log('trying to access',e.name)
e.getName()