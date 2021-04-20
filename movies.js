let url = 'https://endurable-mercurial-dosa.glitch.me/movies'

fetch(url)
    .then(response => (console.log(response.json())))
    .then(json => console.log(json))
    .catch(error => console.log(error))
