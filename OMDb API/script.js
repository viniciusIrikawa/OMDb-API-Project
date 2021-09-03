function search(){
    const title = document.getElementById('movie-title').value;
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=dbd7825d`)
        .then((response) => response.json())
        .then((dados) => {
            // console.log(dados);
            console.log(dados.Actors);
            console.log(dados.Title);
            console.log(dados.Genre);
        });
}
    