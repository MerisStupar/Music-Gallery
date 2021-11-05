let closePlayer = document.querySelector('#close-player');
let musicPlayer = document.querySelector(".music-player");
let boxContainer = document.querySelector(".container .box-container");

// Closing player on click 
closePlayer.onclick = () =>{
    closePlayer.classList.toggle('fa-times');
    musicPlayer.classList.toggle('active');
    boxContainer.classList.toggle('active');
}

let boxes = document.querySelectorAll('.container .box-container .box');
// On click for every box player will pop-up
boxes.forEach(box=>{
    box.onclick=()=>{
        let src = box.getAttribute('data-src');
        let text = box.querySelector('.content h3').innerText;
        closePlayer.classList.add('fa-times');
        musicPlayer.classList.add('active');
        boxContainer.classList.add('active');
        musicPlayer.querySelector('h3').innerText = text;
        musicPlayer.querySelector('audio').src=src;
        musicPlayer.querySelector('audio').play();

    }
});