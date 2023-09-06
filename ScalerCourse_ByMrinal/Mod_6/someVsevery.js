let a = [1,2,3,4]
b = a.some(function(x){
    return x >10
})
console.log('some the items are greater than 10 : ', b)
b = a.every(function(x){
    return x > 0
})
console.log('all the items are greater than 0 : ',b)