const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const volumeControl = document.getElementById('volume');
const trackName = document.getElementById('track-name');
const trackArtist = document.getElementById('track-artist');
const playlistElement = document.getElementById('playlist');

const songs = [
    { title: "Lazy", artist: "Deep Purple", src: "Lazy.mp3" },
    { title: "What Baby Wants", artist: "Alice Cooper", src: "Alice Cooper - What Baby Wants.mp3" },
    { title: "Smoke Two Joints", artist: "Bob Marley", src: "Bob Marley and the Wailers.mp3" },
    { title: "Low Rider", artist: "War", src: "War.mp3" },
    { title: "Mary Had A Little Lamb", artist: "Stevie Ray Vaughan", src: "Mary Had A Little Lamb.mp3" },
    { title: "Pink Floyd Animals", artist: "Pink Floyd", src: "Pink Floyd 1977 Animals.mp3" },
    { title: "The Sound of Silence", artist: "Simon And Garfunkel", src: "Simon And Garfunkel - The Sound Of Silence.mp3" },
    { title: "Dream On", artist: "Aerosmith", src: "Dream On.mp3" },
    { title: "No Smoke Without a Fire", artist: "Bad Company", src: "Bad Company (2).mp3" },
    { title: "Bad Company", artist: "Bad Company", src: "Bad Company (3).mp3" },
    { title: "Iron Man", artist: "Black Sabbath", src: "Black Sabbath (2).mp3" },
    { title: "I Heard It Through the Grapevine", artist: "Creedance Clearwater Revival", src: "Creedance Clearwater Revival (3).mp3" },
    { title: "Dream Weaver", artist: "Gary Wright", src: "Gary Wright.mp3" },
    { title: "Soldier of Fortune", artist: "Deep Purple", src: "Deep Purple (1).mp3" },
    { title: "Johnny Winter's Dead July-17 23-30-51", artist: "Johhny Winter's", src: "JOHNNY WINTER'S DEAD-July-17 23-30-51.mp3" },
    { title: "Me and Bobby Mcgee", artist: "Janis Joplin", src: "Janis Joplin.mp3" },
    { title: "When the Levee Breaks", artist: "Led Zeppelin", src: "Led Zeppelin.mp3" },
    { title: "Whiskey in a Jar", artist: "Metallica", src: "Metallica.mp3" },
    { title: "Gypsy (Alternate Unedited Verson)", artist: "Fleetwood Mac", src: "Gypsy (Alternate Unedited Version).mp3" },
    { title: "Ghost Song", artist: "The Doors", src: "The Doors (6).mp3" },
    { title: "Am I Evil", artist: "Metallica", src: "Metallica (2).mp3" },
    { title: "Logical Song", artist: "Supertramp", src: "Supertramp (3).mp3" },
    { title: "Take the Long Way Home", artist: "Supertramp", src: "Supertramp (5).mp3" },
    { title: "Fade to Black", artist: "Metallica", src: "Metallica (1).mp3" },
    { title: "Voodoo Chile", artist: "Stevie Ray Vaughan", src: "Stevie Ray Vaughan Voodoo Chile.mp3" },
    { title: "Several Specie of Small Furry Animals", artist: "Pink Floyd", src: "Pink Floyd.mp3" },
    { title: "Another Brick in the Wall", artist: "Pink Floyd", src: "Pink Floyd Another Brick in The Wall.mp3" },
    { title: "Swamp Music", artist: "Lynyrd Skynyrd", src: "lynyrd skynyrd.mp3" }
];

let currentSongIndex = 0;
// download current song, const link below
const downloadLink = document.getElementById("download-link");

function loadSong(song) {
    audio.src = song.src;
    trackName.textContent = song.title;
    trackArtist.textContent = song.artist;

    // 🔥 Update download link to current song
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

playButton.addEventListener('click', playSong);
pauseButton.addEventListener('click', pauseSong);
nextButton.addEventListener('click', nextSong);
previousButton.addEventListener('click', previousSong);
volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

// Load the first song
loadSong(songs[currentSongIndex]);
