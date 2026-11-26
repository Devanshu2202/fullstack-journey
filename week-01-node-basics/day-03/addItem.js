import fs from "node:fs/promises";
import path from "node:path";

const filePath = path.join(import.meta.dirname, "data.json");

// 1. Read the file (it comes back as text)
const raw = await fs.readFile(filePath, "utf-8");

// 2. Convert the text into a JavaScript array
const items = JSON.parse(raw);

// 3. Change the data
const newItem = {
  id: items.length + 1,
  title: "Learn modules and fs",
  done: false,
};
items.push(newItem);

// 4. Convert back to text and save
await fs.writeFile(filePath, JSON.stringify(items, null, 2));

console.log("Saved:", newItem);
console.log("Total items:", items.length);
