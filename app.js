const apikey = "LrJ4cNw58VaxfNSBSCcVwiEscf8nnCLu";
const results = document.querySelector("#results");
const deleteBtn = document.querySelector("#delete");
const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");

async function findGif(term) {
  const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { api_key: "LrJ4cNw58VaxfNSBSCcVwiEscf8nnCLu", q: `${term}` },
  });
  const data = response.data.data;
  const gif = data[Math.floor(Math.random() * data.length)].images.original.url;
  appendGif(gif);
}

function appendGif(gif) {
  const newGif = document.createElement("IMG");
  newGif.setAttribute("src", gif);
  newGif.setAttribute("width", 200);
  results.append(newGif);
}

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  findGif(searchInput.value);
});

deleteBtn.addEventListener("click", function () {
  results.innerHTML = "";
});
