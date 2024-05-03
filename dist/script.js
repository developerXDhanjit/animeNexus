/* To do things in the index.html  page : 

1. Knowing the user Input 
2. Sending user to the website with or without search 

*/

/* Steps i will be following : 
1. Selecting the elements 
2. storing the values of user input in a variable 

3. a function that will sent the user to the mainpage with / without the query

*/

let searchInput = document.querySelector("#search-input");
let searchButton = document.querySelector("#enter-button");

function openUrl() {
    let searchInputValue = searchInput.value;
    window.open("./pages/mainpage.html")
}
searchButton.addEventListener("click", (event) => {
 openUrl()
});



