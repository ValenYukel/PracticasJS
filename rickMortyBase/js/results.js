let resultados = document.querySelector(".search-results");

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let query = queryStringObj.get('q');

let objlit = {
    
    fetch : fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data.results);

            let arrayDePersonajes = data.results;

            let allCharacters = [ ];

            for (let i = 0; i < arrayDePersonajes.length; i++) {
                allCharacters += `<article>
                                    <img src="${arrayDePersonajes[i].image}" alt="${arrayDePersonajes[i].name}" />
                                    <p>Name: ${arrayDePersonajes[i].name} </p>
                                    <p>Status: ${arrayDePersonajes[i].status} </p>
                                </article>`;
            }
            resultados.innerHTML = allCharacters;
        })
        .catch(function(e) {
            console.log(e);
            resultados.innerHTML = '<p>Ocurrió un error al buscar los resultados.</p>';
        })

    }

    