const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const volumeControl = document.getElementById('volume');
const trackName = document.getElementById('track-name');
const trackArtist = document.getElementById('track-artist');
const playlistElement = document.getElementById('playlist');
const downloadLink = document.getElementById("download-link");

const songs = [
    { title: "Lazy", artist: "Deep Purple", src: "Songs/Lazy.mp3" },
    { title: "What Baby Wants", artist: "Alice Cooper", src: "Songs/Alice Cooper - What Baby Wants.mp3" },
    { title: "Smoke Two Joints", artist: "Bob Marley", src: "Songs/Bob Marley and the Wailers.mp3" },
    { title: "Low Rider", artist: "War", src: "Songs/War.mp3" },
    { title: "Mary Had A Little Lamb", artist: "Stevie Ray Vaughan", src: "Songs/Mary Had A Little Lamb.mp3" },
    { title: "Pink Floyd Animals", artist: "Pink Floyd", src: "Songs/Pink Floyd 1977 Animals.mp3" },
    { title: "The Sound of Silence", artist: "Simon And Garfunkel", src: "Songs/Simon And Garfunkel - The Sound Of Silence.mp3" },
    { title: "Dream On", artist: "Aerosmith", src: "Songs/Aerosmith (1).mp3" },
    { title: "No Smoke Without a Fire", artist: "Bad Company", src: "Songs/Bad Company (2).mp3" },
    { title: "Bad Company", artist: "Bad Company", src: "Songs/Bad Company (3).mp3" },
    { title: "Iron Man", artist: "Black Sabbath", src: "Songs/Black Sabbath (2).mp3" },
    { title: "I Heard It Through the Grapevine", artist: "Creedence Clearwater Revival", src: "Songs/Creedence Clearwater Revival (3).mp3" },
    { title: "Dream Weaver", artist: "Gary Wright", src: "Songs/Gary Wright.mp3" },
    { title: "Soldier of Fortune", artist: "Deep Purple", src: "Songs/Deep Purple (1).mp3" },
    { title: "Johnny Winter's Dead July-17 23-30-51", artist: "Johhny Winter's", src: "Songs/JOHNNY WINTER'S DEAD - Jul 17 23-30-51.mp3" },
    { title: "Me and Bobby Mcgee", artist: "Janis Joplin", src: "Songs/Janis Joplin.mp3" },
    { title: "When the Levee Breaks", artist: "Led Zeppelin", src: "Songs/Led Zeppelin.mp3" },
    { title: "Whiskey in a Jar", artist: "Metallica", src: "Songs/Metallica.mp3" },
    { title: "Gypsy (Alternate Unedited Verson)", artist: "Fleetwood Mac", src: "Songs/Gypsy (Alternate Unedited Version).mp3" },
    { title: "The Changeling", artist: "The Doors", src: "Songs/The Doors (6).mp3" },
    { title: "Fade to Black", artist: "Metallica", src: "Songs/Metallica (2).mp3" },
    { title: "Logical Song", artist: "Supertramp", src: "Songs/Supertramp (3).mp3" },
    { title: "Take the Long Way Home", artist: "Supertramp", src: "Songs/Supertramp (5).mp3" },
    { title: "Am I Evil", artist: "Metallica", src: "Songs/Metallica (1).mp3" },
    { title: "Voodoo Chile", artist: "Stevie Ray Vaughan", src: "Songs/Stevie Ray Vaughn Voodoo Chile.mp3" },
    { title: "Learning to Fly", artist: "Pink Floyd", src: "Songs/Pink Floyd.mp3" },
    { title: "Another Brick in the Wall", artist: "Pink Floyd", src: "Songs/Pink Floyd - Another Brick In The Wall.mp3" },
    { title: "Swamp Music", artist: "Lynyrd Skynyrd", src: "Songs/Lynyrd Skynyrd (3).mp3" },
    { title: "not", artist: "The Doors", src: "Songs/The Doors (5).mp3}" },
    { title: "Wishing Well", artist: "Black Sabbath", src: "Songs/Black Sabbath (1).mp3" },
    { title: "Slow Train", artist: "Joe Bonamassa", src: "Songs/10 Slow Train.mp3" },
    { title: "Turn the Page", artist: "Bob Seger", src: "Songs/Bob Seger.mp3" },
    { title: "The Ballad of John Henry", artist: "Bob Bonamassa", src: "Songs/06 The Ballad of John Henry.mp3" },
    { title: "", artist: "SuperTramp", src: "Songs/Supertramp (1).mp3" },
    { title: "Child in Time", artist: "Deep Purple", src: "Songs/Child In Time.mp3" },
    { title: "Black Magic Women", artist: "Santana", src: "Songs/Santana.mp3" },
    { title: "Working for MCA", artist: "Lynyrd Skynyrd", src: "Songs/lynyrd skynyrd (2).mp3" },
    { title: "Takin' It To The Streets", artist: "The Doobie Brothers", src: "Songs/The Doobie Brothers.mp3" },
    { title: "Sittin' On The Dock Of The Bay", artist: "Otis Redding", src: "Songs/Sittin' On The Dock Of The Bay Otis Redding.Osts Platoon.mp3" },
    { title: "Sara", artist: 'Fleetwood Mac", src: "Songs/Sara(Fleetwood Mac cover).mp3" },
    { title: "Alabama Song", artist: "The Doors", src: "Songs/The Doors (4).mp3" }
];

let currentSongIndex = 0;

function loadSong(song) {
    audio.src = song.src;
    trackName.textContent = song.title;
    trackArtist.textContent = song.artist;
    
     // const downloadLink up top with rest
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

playButton.addEventListener('click', playSong);
pauseButton.addEventListener('click', pauseSong);
nextButton.addEventListener('click', nextSong);
previousButton.addEventListener('click', previousSong);
volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

// Load the first song
loadSong(songs[currentSongIndex]);
