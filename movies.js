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
        html = '<div class="card ">' +
            '<div class="card-header m-0 p-0">' +
            '<img class="w-100" alt="movie poster" src=' + results[i].poster + '>' +
            '</div>' +
            '<ul class=" list-group list-group-flush">' +
            '<li class="list-group-item">' + 'Title: ' + results[i].title + '</li>' +
            '<li class="list-group-item">' + 'Director: ' + results[i].director + '</li>' +
            '<li class="list-group-item">' + 'Year: ' + results[i].year + '</li>' +
            '<li class="list-group-item">' + 'Rating: ' + results[i].rating + '</li>' +
            '<li class="list-group-item">' + 'Plot: ' + results[i].plot + '</li>' +
            '<li class="list-group-item">' + 'Cast: ' + results[i].actors + '</li>' +
            '</ul>' +
            '</div>'
        $('.card-deck').append(html)
    }
}}




$('#submit').click(function (){
    console.log('hey')
    let userMovie = {
        title: $('#movie-title').val(),
        rating: $('#movie-rating').val()
    };

    function renderUserMovies(){

        if (userMovie.title !== undefined && userMovie.rating !== undefined) {
            let html = ""
            html = '<div class="card ">' +
                '<ul class=" list-group list-group-flush">' +
                '<li class="list-group-item">' + 'Title: ' + userMovie.title + '</li>' +
                '<li class="list-group-item">' + 'Rating: ' + userMovie.rating + '</li>' +
                '</ul>' +
                '</div>'
            $('.card-deck').append(html)
        }
    }

    let post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userMovie)
    }
    fetch(url, post)
        .then(results=>{
            renderUserMovies(results)
        })


})
//
//
//
// // Loader for the page
// // const loader = document.querySelector(".loader");
// // window.onload = function(){
// //     setTimeout(function(){
// //         loader.style.opacity = "0";
// //         setTimeout(function(){
// //             loader.style.display = "none";
// //         }, 500);
// //     },1500);
// // }
// // //Posting the API info to HTML
// // $.get(url, {
// //     limit:  10,
// //     offset: 20
// // }).done(function(data) {
// //     // do something with the data
// // });
