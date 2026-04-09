const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const volumeControl = document.getElementById('volume');
const trackName = document.getElementById('track-name');
const trackArtist = document.getElementById('track-artist');
const playlistElement = document.getElementById('playlist');
// add const downloadLink
const downloadLink = document.getElementById('download-link');



const songs = [
    { title: "Lazy", artist: "Deep Purple", src: "Songs/Lazy.mp3" },
    
];

// add equalizer
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const source = audioContext.createMediaElementSource(audio);
// Create EQ filters
// Bass
const bass = audioContext.createBiquadFilter();
bass.type = "lowshelf";
bass.frequency.value = 200;
// Mid
const mid = audioContext.createBiquadFilter();
mid.type = "peaking";
mid.frequency.value = 1000;
mid.Q.value = 1;
// Treble
const treble = audioContext.createBiquadFilter();
treble.type = "highshelf";
treble.frequency.value = 3000;

    
    source.connect(bass);
    bass.connect(mid);
    mid.connect(treble);
    treble.connect(audioContext.destination);


let currentSongIndex = 0;

function loadSong(song) {
    audio.src = song.src;
    trackName.textContent = song.title;
    trackArtist.textContent = song.artist;
    
    //  Update download link to current song
    downloadLink.href = song.src;
    // Set song name for download
    downloadLink.setAttribute("download", `${song.title}.mp3`);
}

function playSong() {
    audio.play();
}

function pauseSong() {
    audio.pause();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

// add EventListeners for Equalizer 
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('bass').addEventListener('input', e => {
        bass.gain.value = parseFloat(e.target.value);
    });

    document.getElementById('mid').addEventListener('input', e => {
        mid.gain.value = parseFloat(e.target.value);
    });

    document.getElementById('treble').addEventListener('input', e => {
        treble.gain.value = parseFloat(e.target.value);
    });
});
// Add Equalizer Resume Play Eventlistener
playButton.addEventListener('click', () => {
    audioContext.resume();
    playSong();
});

// Auto-advance when song ends
audio.addEventListener('ended', nextSong);
pauseButton.addEventListener('click', pauseSong);
nextButton.addEventListener('click', nextSong);
previousButton.addEventListener('click', previousSong);
volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});




// Load the first song
loadSong(songs[currentSongIndex]);
