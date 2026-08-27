//1: Passing an Array to a function

function displayNumbers(numbers){
    console.log(numbers);
}
let arr=[10,20,30,40];
displayNumbers(arr);

// 2: passing an object to a function
 function displayStudent(student){
    console.log(student.name);
    console.log(student.age)
 }
 let student = {
    name:"Rahul",
    age:29
 };
 displayStudent(student);
 