
function greet(){
    console.log('hellow orlsd.')
}

let timer =  setInterval(greet,1000)

setTimeout(function(){
    clearInterval(timer)
},5000)
