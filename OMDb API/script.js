function search(){
    const inputTitle = document.getElementById('movie-title').value;
    fetch(`http://www.omdbapi.com/?t=${inputTitle}&apikey=dbd7825d`)
        .then((response) => response.json())
        .then((dados) => {
            console.log(dados);
            console.log('Capa do filme: ' + dados.Poster);

            const image = document.getElementById('image');
            image.setAttribute('src' , dados.Poster);
            
            const title = document.getElementById('content-title');
            title.innerHTML = dados.Title;
            
            const year = document.getElementById('content-year');
            year.innerHTML = dados.Year;
            
            const contentDescription = document.getElementById('content-description');
            contentDescription.innerHTML = dados.Plot;
        });
    }


//Key enter listener
window.addEventListener('keypress' , (e) => {
    if(e.which == 13){
        search();
    }
});
