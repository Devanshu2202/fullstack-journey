import fs from "node:fs/promises";

async function main() {
  try {
    const data = await fs.readFile(import.meta.dirname + "/note.txt", "utf-8");
    console.log("File says:", data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

main();
