// let a, b, c;

// a = 5;
// b = 10;
// c = a + b;
// console.log(c);

// a = "beena";
// b = "srivastav";
// c = a + b;
// console.log(c);

// a = 10;
// b = "abc";
// c = a + b;
// console.log(c);

// let array = [10, "adf", 20, "456", 57];
// let sum = 0;

// console.log(array);
// const array1=[]
// const array2=['a','b','c']
// // array constructor
// const array3=new Array('a','b','c')
// // Mix Element
// const array4=new Array('a',10,true,{name:'beena'});
// const array5=new Array(5); // size of array 5
// array5.push(1);
// array5.push(2);
// array5.push(3);
// array5.push(4);
// array5.push(5);
// array5.push(5);


// const new_array=[1,2,3,4,5];

// console.log(array1);
// console.log(array2);
// console.log(array3);
// console.log(array4);
// console.log(array5);
// console.log(array5[5]);
// console.log(array5[0]);
// array5.pop( );
// array5.pop( );
// array5.pop( );
// array5.pop( );
// array5.pop( );
// array5.pop( );
// console.log(array5[5]);
// console.log(array5[0]);

// //add in first
// array4.unshift(4);
// console.log(array4);


// const a1=[1,2,3,4,5,6,7];
// const a2=a1.slice(2,5); // Original array not change
// console.log(a1);
// console.log(a2);

// const a3= a1.splice(2,5);
// console.log(a3);

// const arr=[1,2,3,4,5,6];
// const arr1=arr.splice(1,3); // orginal array change 
// console.log(arr1);

// console.log(arr);

// // Concate the   Array Merge one array
const a1=[1,2,3]
const a2=['a','b','c']
const a3=a1.concat(a2);
console.log(a3);

// More than one array concate
const r=[...a1,...a2,...a3];
console.log(r);

//Object -> Key Value Pair
const student = {
       name : "abc",
       email : "abc@gmail.com",
       roll_no: 1234,
       batch: "CSE-26"
}
console.log(student);
console.log(student.name);


function sum(a,b){
    let r;
    r=a+b;
    return r;
    console.log("Hello")
}
let result =sum(5,6);
console.log(result);
