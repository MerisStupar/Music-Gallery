let closePlayer = document.querySelector('#close-player');
let musicPlayer = document.querySelector(".music-player");
let boxContainer = document.querySelector(".container .box-container");


closePlayer.onclick = () =>{
    closePlayer.classList.toggle('fa-times');
    musicPlayer.classList.toggle('active');
    boxContainer.classList.toggle('active');
}