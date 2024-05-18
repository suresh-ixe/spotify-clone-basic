console.log("Welcome to spotify");
let songIndex=0
let audioElement=new Audio('Let-Her-Go(PagalWorld).mp3')
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
gif.style.opacity=0
let songs=[
    {songName: "Let Her Go", filePath:"Let-Her-Go(PagalWorld).mp3",coverPath:"https://i.scdn.co/image/ab67616d0000b273a7c10595167c713a2df0f187"},
    {songName: "Let Her Go", filePath:"Let-Her-Go(PagalWorld).mp3",coverPath:"https://i.scdn.co/image/ab67616d0000b273a7c10595167c713a2df0f187"},
    {songName: "Let Her Go", filePath:"Let-Her-Go(PagalWorld).mp3",coverPath:"https://i.scdn.co/image/ab67616d0000b273a7c10595167c713a2df0f187"},
    {songName: "Let Her Go", filePath:"Let-Her-Go(PagalWorld).mp3",coverPath:"https://i.scdn.co/image/ab67616d0000b273a7c10595167c713a2df0f187"},
    {songName: "Let Her Go", filePath:"Let-Her-Go(PagalWorld).mp3",coverPath:"https://i.scdn.co/image/ab67616d0000b273a7c10595167c713a2df0f187"},
    {songName: "Let Her Go", filePath:"Let-Her-Go(PagalWorld).mp3",coverPath:"https://i.scdn.co/image/ab67616d0000b273a7c10595167c713a2df0f187"},
    {songName: "Let Her Go", filePath:"Let-Her-Go(PagalWorld).mp3",coverPath:"https://i.scdn.co/image/ab67616d0000b273a7c10595167c713a2df0f187"},
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1
        
    }
    else{
        audioElement.pause()
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity=0
    }
})
audioElement.addEventListener('timeupdate',()=>{

    progress= parseInt((audioElement.currentTime/audioElement.duration)*100)

    myProgressBar.value=progress
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value* audioElement.duration/100
})
//audioElement.play()