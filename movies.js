//Initial Fetch request
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

        }))
function renderMovies(results){
console.log(results)

for (let i= 0; i< results.length; i++) {
    // if (result.title !== undefined && result.rating !== undefined) {
    let html = ""
    html = '<div class="card ">' +
        '<div class="card-header m-0 p-0">' +
        '<img class="w-100" src='+ results[i].poster +'>'+
        '</div>' +
        // '<div class ="card-body"'+
        '<ul class=" list-group list-group-flush">' +
        '<li class="list-group-item">'+ 'Title: '+results[i].title + '</li>' +
        '<li class="list-group-item">' + 'Director: '+results[i].director + '</li>' +
        '<li class="list-group-item">' + 'Year: '+results[i].year + '</li>' +
        '<li class="list-group-item">' + 'Rating: '+results[i].rating + '</li>' +
        '<li class="list-group-item">' + 'Plot: '+results[i].plot + '</li>' +
        '<li class="list-group-item">' + 'Cast: '+results[i].actors + '</li>' +
        '</ul>' +
        // '</div>'+
        '</div>'
    $('.card-deck').append(html)

}}
// }





// Loader for the page
// const loader = document.querySelector(".loader");
// window.onload = function(){
//     setTimeout(function(){
//         loader.style.opacity = "0";
//         setTimeout(function(){
//             loader.style.display = "none";
//         }, 500);
//     },1500);
// }
// //Posting the API info to HTML
// $.get(url, {
//     limit:  10,
//     offset: 20
// }).done(function(data) {
//     // do something with the data
// });
