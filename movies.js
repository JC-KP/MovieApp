//Initial Fetch request
let url = 'https://endurable-mercurial-dosa.glitch.me/movies'
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
}
let fetchResponse= fetch(url, options)
    fetchResponse
    .then(response => response.json())
    .then(results => {
        let html = ""
        for (let result of results){
            html = '<div class="card">' +
                '<div class="card-header">' +
                '<img src=""'
        }return html
    })
console.log(fetchResponse)
console.log('kelvon can u see this')




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
