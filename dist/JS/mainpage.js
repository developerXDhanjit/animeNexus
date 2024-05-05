/* To do things in this page : 

1. Knowing the user Input 
2. Sending user to the website with or without search 

*/

/* Steps i will be following : 
1. Selecting the elements 
2. storing the values of user input in a variable 

3. a function that will sent the user to the mainpage with / without the query

*/

let searchAnimeInput = document.querySelector("#search-anime-input");
let searchAnimeButton = document.querySelector("#search-icon");

searchAnimeButton.addEventListener("click", (e) => {
  let searchAnimeInputValue = searchAnimeInput.value;
  window.open("./searchResultsPage.html");
});

async function fetchAnime(nameOfAnime) {
  let response = await fetch(`https://api.jikan.moe/v4/anime?q=${nameOfAnime}`);
  let data = await response.json()
  console.log(data.data);
}

fetchAnime("Naruto")
