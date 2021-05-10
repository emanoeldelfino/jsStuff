const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  $.post('https://jsonplaceholder.typicode.com/posts', { title: title, body: body}, (data) => {
    console.log(data);
  });
});
