const search = document.getElementById("search");
const searchResult = document.getElementById("results");
const form = document.getElementById("form");
const apiWiki = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=50&srsearch=";

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const searchValue = search.value;

    getResult(searchValue);
})

async function getResult(searchValue) {
    const response = await fetch(apiWiki + searchValue);
    const results = await response.json();

    console.log(results);
    displayResults(results);
}

function displayResults(results) {
    let output = "";

    results.query.search.forEach((result) => {
        let resultURL = `https://en.wikipedia.org/?curid=${result.pageid}`;

        output += `
            <a href="${resultURL}" class="result" target="_blank">
                <h3 id="title">${result.title}</h3>
                <p id="link">${resultURL}</p>
                <p id="detail">${result.snippet + " . . ."}</p>
            </a>
        `;

        searchResult.style.display = "flex";
        searchResult.innerHTML = output;
    });
}