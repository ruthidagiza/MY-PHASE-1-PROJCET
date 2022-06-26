# **RUTH MOVIES**
# [Click here to see the live site](https://ruthidagiza.github.io/MY-PHASE-1-PROJCET/)
## This is my phase one project.
The project contains a website where a user can view movie recomendations
 and also search movies based on their titles. it comprises of a single html file, javascript file and css for styling.
 I also use external api  fake movies api which provides me with movies data.
 ALl event listeners are handled with javascript and  also i am able to keep track
 of the state of the website anytime to improve user exprience


## **Installing and running**
The site is currently hosted in github pages but if you need to run it
locally you can clone my this github repo and  use a local server to
serve the site files. i recomend vscode liveserver extension. To contribute to
this project development fork the repository and submit  you pull request,
you changes will be merged as soon as i receive them

## key functionalities
### fetching movies
Using the owen-wilson-wow api that provides use with random movies
i am able to fetch  movies using a get request.  This returns an array of json objects where each object
contains the movie data. i loop through the array using internal for each method to create a html component for
each movie. i then set the inner html of the movies DOM element to the movies html.
the inner html changes from loading state to movie elements which users can see

### searchig movies
This functionality allows users to search movies by title in the API.
For this i created a for which contains a search input and search button. the user types the
movie title  and submits the form. using javascript i prevent the default browser behaviour of reloading after form submit
then set the state of the website to loading. i then request the
a movie with the searched title from the api. the api returns an array with one element
which i render movie component to the user.
## rendering movie elementsi
To avoid repeating myself i separated the rendering logic to one function
that takes movies array, loops through them and creates corresponding html elements for each movie.

#

#### credits to owen-wilson-wow API for providing us with free movies data