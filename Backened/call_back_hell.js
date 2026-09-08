// function GetData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 3000);
//     });
// }

// //Promis chain
// GetData(1)
// .then((res)=>{
//     return GetData(2);})
// .then((res)=>{
//     return GetData(3)})
// .then((res)=>{
//     console.log(res);
// })    

// Async-Await function
async function hello(){
    console.log("hello !!");
}

function Api(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weatherData,ifound");
            resolve(200);
        
        },3000);
    });
}
//await Api(); error because it works only with async function
async function getweatherData(){
    await Api();
    await Api();
}
getweatherData();