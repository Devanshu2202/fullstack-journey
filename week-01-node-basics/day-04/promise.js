import fs from "node:fs/promises";

fs.readFile(import.meta.dirname + "/note.txt", "utf-8")
  .then((data) => console.log("File says:", data))
  .catch((err) => console.log("Error:", err.message));
