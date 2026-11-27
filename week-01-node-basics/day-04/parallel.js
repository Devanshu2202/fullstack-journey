const start = Date.now();

const [todo1, todo2, todo3] = await Promise.all([
  fetch("https://jsonplaceholder.typicode.com/todos/1").then((r) => r.json()),
  fetch("https://jsonplaceholder.typicode.com/todos/2").then((r) => r.json()),
  fetch("https://jsonplaceholder.typicode.com/todos/3").then((r) => r.json()),
]);

console.log(todo1.title);
console.log(todo2.title);
console.log(todo3.title);
console.log(`Took ${Date.now() - start} ms`);
