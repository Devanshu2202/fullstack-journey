import path from "node:path";

console.log("This file's folder:", import.meta.dirname);
console.log("This file:", import.meta.filename);

const dataFile = path.join(import.meta.dirname, "data.json");
console.log("Data file path:", dataFile);
console.log("Extension:", path.extname(dataFile));
console.log("File name:", path.basename(dataFile));
