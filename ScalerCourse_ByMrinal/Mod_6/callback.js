function hello(){//callback functions
    console.log('hellow')
}
function world(a){// higher order functions
    a()
    console.log('world')
}
world(hello)