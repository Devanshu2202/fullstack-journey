async function getTodo(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.log("Something went wrong:", err.message);
  }
}

console.log(await getTodo(1));
console.log(await getTodo(99999)); // this one fails with 404
