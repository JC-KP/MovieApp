// Wait for window load
// $(window).on("load", function () {
//     // Animate loader off screen
//     $(".se-pre-con").fadeOut("slow");
// });

// //Initial Fetch request
let url = 'https://endurable-mercurial-dosa.glitch.me/movies'
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
}

 fetch(url, options)
     .then(response => response.json()
        .then(results => {
            $('.card-deck').html('')
                renderMovies(results)
            console.log(results);
        }))
function renderMovies(results){

for (let i= 0; i< results.length; i++) {
    if (results[i].title !== undefined && results[i].rating !== undefined) {
        let html = ""
        html = '<div class="card">' +
            '<div class="card-header m-0 p-0">' +
            '<img class="w-100" alt="movie poster" src=' + results[i].poster + '>' +
            '</div>' +
            '<ul class=" list-group list-group-flush">' +
            '<li class="list-group-item">' + 'Title: ' + results[i].title + '</li>' +
            '<li class="list-group-item">' + 'Director: ' + results[i].director + '</li>' +
            '<li class="list-group-item">' + 'Year: ' + results[i].year + '</li>' +
            '<li class="list-group-item">' + 'Rating: ' + results[i].rating + '</li>' +
            '<li class="list-group-item">' + 'Cast: ' + results[i].actors + '</li>' +
            '</ul>' +
            '</div>' +
            '<button type="button" id="delete-btn" class="btn btn-danger">DELETE</button>'+
        $('.card-deck').append(html)
    }
}}

// SUBMITTING USER MOVIE INTO INPUTS

$('#submit').click(function (e){
    e.preventDefault()
    let userMovie = {
        title: $('#movie-title').val(),
        director: $('#movie-director').val(),
        year: $('#movie-year').val(),
        rating: $('#movie-rating').val(),
        actors: $('#movie-cast').val()
    };


//Post user movie

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userMovie)
    })
        .then((response) => { return response.json() })
        .then(function (results) {
            console.log(results);
            renderMovies(results)
            location.reload()
        })
})

//Delete movie

$('#delete-btn').click(function(e){
    e.preventDefault()

    fetch('https://endurable-mercurial-dosa.glitch.me/movies/' + this.results.id, {
        method: "DELETE"
    }).then(function (response){
        location.reload()
    })
})
