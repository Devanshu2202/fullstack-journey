const os = require("os");

console.log("Platform:", os.platform());
console.log("CPU cores:", os.cpus().length);
console.log("Total memory (GB):", (os.totalmem() / 1024 ** 3).toFixed(2));
console.log("Free memory (GB):", (os.freemem() / 1024 ** 3).toFixed(2));
console.log("Home folder:", os.homedir());

console.log(
  `Today is ${new Date().toDateString()}, running Node ${process.version}`,
);
