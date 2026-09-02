let promise = new Promise((resolve, reject) => {
    console.log("I am a new Promise");

    // resolve("Successfully executed");
    reject("Reject your request");
});

function GetData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Successfull");
        }, 8000);
    });
}

let r = GetData(123);