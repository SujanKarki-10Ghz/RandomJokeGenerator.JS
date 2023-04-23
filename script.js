const jokeEl= document.getElementById("joke");
const btnEl = document.getElementById("btn");
let url ="https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
const getJoke = ()=>{
    fetch(url).then(data => data.json())
    .then(res=>{
        jokeEl.textContent = `${res.setup} ${res.delivery}`
    })
}  
btnEl.addEventListener("click", getJoke);