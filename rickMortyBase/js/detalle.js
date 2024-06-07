
let queryString = location.search;
let urlParams = new URLSearchParams(queryString);
let characterId = urlParams.get('id');

fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){

        console.log(data);

        let nombre = document.querySelector(".nombre");
        let status = document.querySelector(".status");
        let especie = document.querySelector(".especie");
        let imag =  document.querySelector(".imagen"); 


        nombre.innerText = data.name;
        status.innerText += data.status;
        especie.innerText += data.species;
        imag.src = data.image;         


    })
    .catch( function(e){
        console.log(e)
    })
