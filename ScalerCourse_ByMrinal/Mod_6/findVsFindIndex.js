let a = [1,2,3,4]
b = a.find(function(item){// returns the item if it exist otherwise return undefined
    return item  == 0
})
console.log(b)
b = a.findIndex(function(item){ // return the index of the item if exist otherwise return -1
    return item  == 10
})
console.log(b)