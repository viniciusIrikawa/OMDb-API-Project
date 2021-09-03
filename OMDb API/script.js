function search(){
    const title = document.getElementById('movie-title').value;
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=dbd7825d`)
        .then((response) => response.json())
        .then((dados) => {
            console.log(dados);
            console.log('Título: ' + dados.Title);
            console.log('Gênero: ' + dados.Genre);
            console.log('Atores: ' + dados.Actors);
            console.log('Avaliação: ' + dados.imdbRating);
            console.log('Capa do filme: ' + dados.Poster);
        });
}
    