// Pending
let p1 = new Promise(function(res,rej){
    const a = 2
    const b = 2

    setTimeout(function(){
        if (a==b){
            res('Both are equal')
        }
        else{
            rej('Both are not equal')
        }
    },4000)
})
console.log(p1)

// Accepted
p1.then(function(res){
    console.log(res)
})

// Rejected
let p2 = new Promise(function(res,rej){
    const a = 2
    const b = 10

    setTimeout(function(){
        if (a==b){
            res('Both are equal')
        }
        else{
            rej('Both are not equal')
        }
    },4000)
})
p2.catch(function(err){
    console.log(err)
})