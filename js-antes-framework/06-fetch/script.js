fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(r => r.json())
  .then((jsonBody) => {
    document.querySelector("#app").innerHTML = jsonBody.title;
    console.log(jsonBody);
  });

// request and json method returns a promise.

const data = {
  title: 'abc',
  body: 'def',
}

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data)
})
  .then(r => r.json())
  .then((jsonBody) => {
    console.log(jsonBody);
  });
