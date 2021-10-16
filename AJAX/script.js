let movieId = document.getElementById('movie-id');
let movieTitle = document.getElementById('title');
let renderedId = document.getElementById('id');
let btn = document.getElementById('btn1');

let userId = 1;
let xhr1 = new XMLHttpRequest();
getId();
async function getId() {
    xhr1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            ajaxCall(xhr1.responseText);
        }
    }
    
}
xhr1.open("GET", `http://localhost:5000/api/movies/recommend/${userId}`);
xhr1.send();

function ajaxCall(idNum) {
    //here is the hmlhttprequest object to fetch data
    let xhr = new XMLHttpRequest();
    console.log(idNum);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //grab data and render
            let response = JSON.parse(xhr.responseText);

            console.log(response);
            renderHTML(response);
        }
    }

    xhr.open("GET", `https://api.themoviedb.org/3/movie/${idNum}/recommendations?api_key=4e03597f829ab368d49ae4a8f0769033&language=en-US`)
    xhr.send();
}

function renderHTML(data) {
    movieTitle.innerHTML = "";
    for (var i = 0; i < data.results.length; i++) {
        var imag = new Image();
        let imgString = "https://image.tmdb.org/t/p/w500/" + data.results[i].poster_path;
        imag.src = imgString;
        imag.setAttribute("height", 300);
        document.getElementById('title').appendChild(imag);

        movieTitle.innerHTML += "<br />" + "ID: " + data.results[i].id + "<br />" + "Title: " + data.results[i].original_title + "<br />"
            + "Synopsis: " + data.results[i].overview + "<br />" + "<br />";

        var btnn = document.createElement('button');
        btnn.innerHTML = "Add to my List!";
        document.getElementById('title').appendChild(btnn);

        movieTitle.innerHTML += "<hr />" + "<br />";
    }






}