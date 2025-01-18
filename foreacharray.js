//array foreach function
//foreach function is used for perform the task
const cityname=["yellandu","palvancha","kothagudem","bhadrachalam"];
cityname.forEach((element) => {
    console.log(element);
    
});
cityname.map((e)=>{console.log(e);
})
//array map function
//map function return the value in same array
//map use callback function
const number=[11,22,33,44,55,66,77,88]
const newarray=number.map((e)=>{
    return e*2})
console.log(newarray);
//find is used for finding the element in an array is present inside the array are not
//it will also return the value
//after return you have to write any statement 
// const success=number.find((e)=> {
//     return e==55})
// console.log(success);
const num=number.findIndex((a)=>{
    return a==55})
console.log(num);


const su=cityname.findIndex(a=> a=="kothagudem")
console.log(su);

