const f = require("fs");

console.log("data1");

console.log("data2");

// Create/write file
// f.writeFileSync("rohit.txt", "hello to all, i am rohit gupta");

// Create another file
// f.writeFileSync("rohit_sri11.txt", "hello to all, i am rohit gupta");

// Append data
// f.appendFileSync("rohit.txt", "\nupdated data");

// Append data to another file
// f.appendFileSync("update.txt", "\nupdated data");

// Read file
const data = f.readFileSync("rohit_sri11.txt", "utf-8");
console.log(data);

// Delete file
// f.unlinkSync("rohit.txt");

console.log("data3");

console.log("data4");