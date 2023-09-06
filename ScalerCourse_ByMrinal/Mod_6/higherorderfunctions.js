// map
let a = [-1,1,2,3,4,5,6]
console.log('our Input : ',a)

console.log('\n')
console.log('MAP')


b = a.map(function(x){
    return x*x
})
console.log('squared array: ',b) // a squared array of array a


// foreach
console.log('\n')
console.log('FOREACH')// dont return the list like map
a.forEach(function(x){
    console.log(x*x)
})


// filter
console.log('\n')
console.log('FILTER')
b = b.filter(function(x){
    return x>10
})
console.log('numbers greater than 10 in the array :',b)

b = a.filter(function(x){
    return x%2 == 0
})
console.log('even no list : ',b)

b = a.filter(function(x){
    return x>0
})
console.log('positive numbers : ',b)


// reduce
console.log('\n')
console.log('REDUCE')
let acc = 0
b = b.reduce(function(acc,x){
    acc = x+acc
    return acc
},0)
console.log('sum of all the elements in the list :',b)


// chaining higher order functions
console.log('\n')
console.log('CHAINING ')
let transactions = [ 10000,100,-100,-200,-5000]
console.log('transactions :',transactions)
b = transactions.filter(function(x){
    return x>0
}).reduce(function(acc,x){
    acc = acc+x
    return acc
},0)
console.log(' total credit : ',b)


