const fs = require("fs");

const filePath = __dirname + "/demo.txt"
// Read file
// fs.readFile(filePath, "utf8", (err, data) => {
//     if(err) {
//         throw err;
//     } else {
//         console.log("Reading file :",filePath);
//         console.log(data);
//     }
// });

// Write file
// fs.writeFileSync("hello.txt", "This is some data...");


// Delete file
fs.unlink(__dirname + "/hello.txt", (err, data) => {
    if(err) throw err;
    console.log("File deleted...");
})