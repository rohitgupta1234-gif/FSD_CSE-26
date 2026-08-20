// setTimeout(function,delay);
// function->code you want to execute
// delay -> time in milliseconds\
// 1000 milliseconds = 1 second

// 1.Simple Example

console.log("one")
console.log("two")
console.log("three")

setTimeout(function(){
    console.log("Hello after 5 seconds ");
},5000);

console.log("four")
console.log("five")

// //2.Using Arrow funtion
setTimeout(()=>{
    console.log("hello after 3 seconds ");
},3000);

//3. Real-Life Example
function welcome(){
    console.log("WElcome to 2000 javascript !");
}
setTimeout(welcome,2000);

//4.Passing Argument
function greet(f_name,l_name){
    console.log("Hello 1000 " + f_name + l_name);
}

setTimeout(greet , 1000, "Beena", "Srivastav");