let obj = {
    name:'rahman',
    age:25,
    address:'Malappuram,Kondotty'
}
let arr = [1,2,3,4]

// looping through objects
for (let i in obj){
    console.log(i,':',obj[i])
}
// looping through iterators[arrays,strings etc.]
for (let i of arr){
    console.log(i)
};
//looping through iterators and printing the index,value
for (let [idx,val] of arr.entries()) {
  console.log(idx,val);
}