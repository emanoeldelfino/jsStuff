async function fetchTodo(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();

  return jsonBody;
}

async function postPosts(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const jsonBody = await response.json();

  return jsonBody;
}

const request1 = fetchTodo("https://jsonplaceholder.typicode.com/todos/1");
const request2 = postPosts("https://jsonplaceholder.typicode.com/posts", {
  title: "abc",
  body: "def",
});

request1.then((response) => {
  console.log(response);
});

request2.then((response) => {
  console.log(response);
});
