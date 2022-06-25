//alert("javascript is connected")

let movieslist =[]


function getMovies(){
    console.log("movies request was sent")
    fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random?results=500")
    .then(function(response){

console.log("received a response")
        return response.json();
    })
    .then(function(movies){
        movieslist=movies;

        console.log("an array of json movies received")
        console.log(movieslist)
    })
}

getMovies()