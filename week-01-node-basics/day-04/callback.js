import fs from "node:fs";

fs.readFile(import.meta.dirname + "/note.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log("File says:", data);
});
