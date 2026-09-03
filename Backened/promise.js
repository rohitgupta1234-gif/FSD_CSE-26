// let promise = new Promise((resolve, reject) => {
//     console.log("I am a new Promise");

//     // resolve("Successfully executed");
//     reject("Reject your request");
// });

// function GetData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//            // resolve("Successful");
//             reject("error");
//         }, 9000);
//     });
// }

// let r = GetData(123);

const Getpromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        //resolve("Successful");
         reject("network error");
    });
};

let promise = Getpromise();

promise.then(() => {
    console.log("promise is fulfilled");
});

promise.catch(() => {
    console.log("network is not working properly");
});