'use strict'
console.log('>: ',this)


function fun(){
    console.log(this)
}

console.log('\nFUNCTION >: ')
fun()
let obj = {
    fun1 : function(){
        console.log(this)
    },
    fun2 : function(){
        function fun3(){
            console.log(this)
        }
        return fun3()
    }
}

console.log('\nOBJ > FUNCTION : ')
obj.fun1()
console.log('\nOBJ > FUNCTION > FUNCTION : ')
obj.fun2()