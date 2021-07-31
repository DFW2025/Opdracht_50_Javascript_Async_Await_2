// JAVASCRIPT

// Aanroepen data uit database.....

const apiUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=b7a9e5e5ba8d431320902a33faf7a30c"


// MovieGenres   - Fetch methode


// fetch(apiUrl, { method: "GET" })


//     .then(function (response) {
//         if (!response.ok) {
//             throw new Error("HTTP error, status = " + response.status);
//         }
//         return response.json();
//     })
//     .then(function (json) {
//         for (var i = 0; i < json.genres.length; i++) {
//             var myList = document.querySelector("ul");
//             var listItem = document.createElement("li");
//             listItem.innerHTML = "<strong>" + json.genres[i].name + "</strong>";
//             listItem.innerHTML += " heeft het id van " + json.genres[i].id + '.';
//             myList.appendChild(listItem);
//         }
//     })
//     .catch(function (error) {
//         var p = document.createElement('p');
//         p.appendChild(
//             document.createTextNode('Error: ' + error.message)
//         );
//         document.body.insertBefore(p, myList);
//     });



// MovieGenres   - Async/Await methode


async function getMoviesGenres () {

const serverdata = await fetch(apiUrl, { method: "GET" });   // await response of fetch call 
const response = await serverdata.json();                    // only proceed once promise is resolved

console.log(response);

for (var i = 0; i < response.genres.length; i++) {
var myList = document.getElementById("Moviegenres");
var listItem = document.createElement("li");
myList.appendChild(listItem);
listItem.innerHTML = "<strong>" + response.genres[i].name + "</strong>";
listItem.innerHTML += " heeft het id van " + response.genres[i].id + '.';

    
} 

};



getMoviesGenres()
   .then (response => {console.log ("yippy, alles is binnen")})
    .catch(function (error) {
        var p = document.createElement('p');
        p.appendChild(
            document.createTextNode('Error: ' + error.message)
        );
        document.body.insertBefore(p, myList);
    });




// Movie TopRated

const apiUrl1 = "https://api.themoviedb.org/3/movie/top_rated?api_key=b7a9e5e5ba8d431320902a33faf7a30c&language=en-US&page=1"

async function getTopRatedMovies() {

    const serverdata2 = await fetch(apiUrl1, { method: "GET" });   // await response of fetch call 
    const response2 = await serverdata2.json();                    // only proceed once promise is resolved

    console.log(response2);

    for (var i = 0; i < response2.results.length; i++) {
        var myList2 = document.getElementById("BestMovies");
        var listItem2 = document.createElement("li");
        myList2.appendChild(listItem2);
        listItem2.innerHTML = "<strong>" + response2.results[i].original_title + "</strong>";
        

    }

};

getTopRatedMovies()
    .then(response => { console.log("yippy, alles is binnen") })
    .catch(function (error) {
        var p = document.createElement('p');
        p.appendChild(
            document.createTextNode('Error: ' + error.message)
        );
        document.body.insertBefore(p, myList);
    });



// Action Movie TopRated

const apiUrl2 = "https://api.themoviedb.org/3/discover/movie?api_key=b7a9e5e5ba8d431320902a33faf7a30c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=buy"

async function getTopRatedActionMovies() {

    const serverdata3 = await fetch(apiUrl2, { method: "GET" });   // await response of fetch call 
    const response3 = await serverdata3.json();                    // only proceed once promise is resolved

    console.log(response3);

    for (var i = 0; i < response3.results.length; i++) {
        var myList2 = document.getElementById("BestActionMovies");
        var listItem2 = document.createElement("li");
        myList2.appendChild(listItem2);
        listItem2.innerHTML = "<strong>" + response3.results[i].original_title + "</strong>";


    }

};

getTopRatedActionMovies()
    .then(response => { console.log("yippy, alles is binnen") })
    .catch(function (error) {
        var p = document.createElement('p');
        p.appendChild(
            document.createTextNode('Error: ' + error.message)
        );
        document.body.insertBefore(p, myList);
    });




// // Looping through Object

// for (x in data) {
//     console.log(x);
//     console.log(data[x]);
// }


