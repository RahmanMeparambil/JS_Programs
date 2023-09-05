for (let i=0;i<10;i++){
    console.log('hello')
}

let arr = [1,2,3,4]
for (let i=0;i<arr.length;i++){
    console.log(arr[i])
}

console.log('squared array elements')
for (let i=0;i<arr.length;i++){
    console.log(arr[i]*arr[i])
}
console.log('in a list')
let sqrdArr = []
for (let i=0;i<arr.length;i++){
    sqrdArr.push(arr[i]*arr[i])
}
console.log(sqrdArr)

// looping 1 to 10 using while loop
let idx = 10
while(idx){
    console.log(idx)
    idx--
}

// 5 to 10 using do while loop
console.log('Demonstration of the usage do while loop')
idx = 5
do{
    console.log(idx)
    idx++
}
while(idx<=10)


console.log('Loop through items in objects')
let colorObj = {
    primaryColor:'red',
    secondryColor:'blue',
    tertiaryColor:'white',
}
for (color in colorObj){
    console.log(color)
}
