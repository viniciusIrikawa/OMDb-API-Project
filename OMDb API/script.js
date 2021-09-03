function search(){
    const inputTitle = document.getElementById('movie-title').value;
    fetch(`http://www.omdbapi.com/?t=${inputTitle}&apikey=dbd7825d`)
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
    

// const createInfo = () => {
//      const infoTitle
// }

window.addEventListener('keypress' , (e) => {
    if(e.which == 13){
        search();
    }
});