console.log('Welcome to spotify');
//Inirialize the variables
let songIndex = 0 ;
let audioElement = new Audio('music/Bad habits.mp3');
let masterPlay = document.getElementById('masterPlay');
let mybar = document.getElementById('mybar');
let gif = document.getElementById('gif');
let allsong= Array.from(document.getElementsByClassName('allsong'));
let songs = [
    { songname: "Bad Habits", filepath: "music/1.mp3", coverpath: "./covers/ed.jpg" },
    { songname: "Blinding  Lights", filepath: "music/1.mp3", coverpath: "./covers/weekend.jpg" },
    { songname: "Under the influence", filepath: "music/2.mp3", coverpath: "covers/lookism.jpeg" },
    { songname: "Way down we Go", filepath: "music/3.mp3", coverpath: "covers/way down.jpeg" },
    { songname: "We dont talk anymore ", filepath: "music/4.mp3", coverpath: "covers/we dont.webp" },

]
allsong.forEach((element , i)=>{
   
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    
})
//audioElement.play();
//Handle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate', () => {

    //Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    //The above Value is in percentage
    
    mybar.value = progress;
})
mybar.addEventListener('change', () => {
    audioElement.currentTime = mybar.value * audioElement.duration / 100;
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('moj')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    
    })
    }
    Array.from(document.getElementsByClassName('moj')).forEach((element)=>{
        element.addEventListener('click' ,(e)=>{
            makeAllplays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src=`music/${songIndex+1}.mp3`;
            audioElement.play();
            audioElement.currentTime =0;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            })
        })
        document.getElementById('next').addEventListener('click',()=>{
            if(songIndex>=4){
                songIndex= 0;
            }
            else{
                songIndex += 1; 
            }
            audioElement.src=`music/${songIndex+1}.mp3`;
            audioElement.play();
            audioElement.currentTime =0;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
        document.getElementById('previous').addEventListener('click',()=>{
            if(songIndex <=0){
                songIndex=0;
            }
            else{
                songIndex -= 1;
            }
            audioElement.src=`music/${songIndex+1}.mp3`;
            audioElement.play();
            audioElement.currentTime =0;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
        


