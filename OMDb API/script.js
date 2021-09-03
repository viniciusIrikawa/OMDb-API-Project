function search(){
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=dbd7825d`)
        .then((response) => response.json())
        .then((dados) => {
            // const title = document.getElementById('movie-title').value;
            console.log(dados.title);
        });
}
    