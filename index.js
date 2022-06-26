//alert("javascript is connected")

let container = document.getElementById('movies');
let refreshbtn = document.getElementById('refreshbtn');
let movieshtml = '<div class="moviesdata">'



//
function getMovies(){
    console.log("movies request was sent")
    fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random?results=500")
    .then(function(response){

console.log("received a response")
        return response.json();
    })
    .then(function(movies){

    movies.forEach(function(movie) {
        movieshtml = movieshtml+`<div class="moviecomponent">
          <img src=${movie.poster}  style="height:230px;width:300px;border-radius:10px"/>
          <p style="text-align:center;font-weight:bold;font-size:20px;">${movie.movie} </p>
          <div style="display:flex;width:300px;justify-content:space-between;">
          <p>Year </p>
          <p>${movie.year} </p>
         </div>
         <div style="display:flex;width:300px;justify-content:space-between;">
         <p>Release Date </p>
         <p>${movie.release_date} </p>
        </div>
        <div style="display:flex;width:300px;justify-content:space-between;">
        <p>Main Character </p>
        <p>${movie.character} </p>
       </div>
       <div style="display:flex;width:300px;justify-content:space-between;">
       <p>Director </p>
       <p>${movie.director} </p>
      </div>
      <div style="display:flex;width:300px;justify-content:space-between;">
      <p>Duration </p>
      <p>${movie.movie_duration} </p>
     </div>
     <div style="display:flex;width:300px;justify-content:space-between;">
     <p>Likes </p>
     <p>${movie.total_wows_in_movie +1000} </p>
    </div>
     </div>`
    });

    movieshtml = movieshtml+'</div>'
    // console.log(html)

    container.innerHTML = movieshtml

        console.log("an array of json movies received")
        // console.log(movieslist)
    })
}

getMovies()



// ?movie=zoolander
// window will help the webpage to communicate with the browser because it contains javascript  global variables and functions
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

//adding click listener to the refresh button to refresh movies
refreshbtn.addEventListener("click",function(e){
    console.log("refresh button clicked")
})