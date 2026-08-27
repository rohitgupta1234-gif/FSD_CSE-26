// const fs = require('fs');

// try {
//     // Read the file
//     const data = fs.readFileSync('fileWrite.js', 'utf8');

//     // Display file contents
//     console.log(data);

// } catch (err) {
//     // Display error if file cannot be read
//     console.log("Error:", err);
// }


const fs = require('fs');

// ==========================================
// 1. Synchronous File Reading
// ==========================================

try {
    const data = fs.readFileSync('fileWrite.js', 'utf8');

    console.log("===== Synchronous File Reading =====");
    console.log(data);

} catch (err) {
    console.log("Error reading file:", err);
}


// ==========================================
// 2. Asynchronous File Reading
// ==========================================

fs.readFile('data.txt', 'utf8', (err, data) => {

    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    console.log("===== Asynchronous File Reading =====");
    console.log(data);
});