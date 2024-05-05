/* What i need to fetch from the data list ? 

1. name with  img url 
2. list of those details in an array 

*/

const searchContainer = document.querySelector("#search-results-container");

async function fetchAnime(nameOfAnime) {
  let response = await fetch(`https://api.jikan.moe/v4/anime?q=${nameOfAnime}`);
  let jsonResponse = await response.json();
  let listOfAnimes = await jsonResponse.data;
  for (let index = 0; index < listOfAnimes.length; index++) {
    const elementTitle = listOfAnimes[index].title;
    const elementImageUrl = listOfAnimes[index].images.webp.image_url;
    const malUrl = listOfAnimes[index].url;

    let card = document.createElement("div");
    card.id = `card${index}`;
    card.classList.add("card");
    card.innerHTML = `   
    <div class="shadow-md w-[10rem] image-container">
            <img
              class="rounded-xl hover:shadow-xl"
              src="${elementImageUrl}"
              alt="logo"
            />
          </div>
          <div id="anime-detail${index}">
            <div class="text-2xl text-center text-white anime-name">
              ${elementTitle}
            </div>
            <div class="text-xl text-center text-white other-anime-details"></div>
          </div>
        </div>
    `;
    searchContainer.appendChild(card);
    card.addEventListener("click", (event) => {
      window.open(`${malUrl}`);
    });
  }
}

let searchAnimeInput = document.querySelector("#search-anime-input");
let searchButton = document.querySelector("#search-icon");

searchButton.addEventListener("click", (event) => {
  const searchAnimeInputValue = searchAnimeInput.value;
  fetchAnime(searchAnimeInputValue)
});
