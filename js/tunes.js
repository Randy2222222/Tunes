const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const volumeControl = document.getElementById('volume');
const trackName = document.getElementById('track-name');
const trackArtist = document.getElementById('track-artist');
const playlistElement = document.getElementById('playlist');
const downloadLink = document.getElementById('download-link');

const songs = [
    { title: "Lazy", artist: "Deep Purple", src: "Songs/Lazy.mp3" },
    { title: "What Baby Wants", artist: "Alice Cooper", src: "Songs/Alice Cooper - What Baby Wants.mp3" },
    { title: "Smoke Two Joints", artist: "Bob Marley", src: "Songs/Bob Marley and the Wailers.mp3" },
    { title: "Low Rider", artist: "War", src: "Songs/War.mp3" },
    { title: "Mary Had A Little Lamb", artist: "Stevie Ray Vaughan", src: "Songs/Mary Had A Little Lamb.mp3" },
    { title: "Pigs(Three Different Ones)", artist: "Pink Floyd", src: "Songs/Pink Floyd 1977 Animals.mp3" },
    { title: "The Sound of Silence", artist: "Simon And Garfunkel", src: "Songs/Simon And Garfunkel - The Sound Of Silence.mp3" },
    { title: "Dream On", artist: "Aerosmith", src: "Songs/Aerosmith (1).mp3" },
    { title: "No Smoke Without a Fire", artist: "Bad Company", src: "Songs/Bad Company (2).mp3" },
    { title: "Only Women Bleed", artist: "Alice Cooper", src: "Songs/Alice Cooper - Only Women Bleed.mp3" },
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
    { title: "Perfect Stranger", artist: "Supertramp", src: "Songs/Supertramp (3).mp3" },
    { title: "Poison", artist: "Alice Cooper", src: "Songs/Songs_Alice Cooper - Poison.mp3" },
    { title: "Take the Long Way Home", artist: "Supertramp", src: "Songs/Supertramp (5).mp3" },
    { title: "Am I Evil", artist: "Metallica", src: "Songs/Metallica (1).mp3" },
    { title: "Voodoo Chile", artist: "Stevie Ray Vaughan", src: "Songs/Stevie Ray Vaughn - Voodoo Chile.mp3" },
    { title: "Learning to Fly", artist: "Pink Floyd", src: "Songs/Pink Floyd.mp3" },
    { title: "Another Brick in the Wall", artist: "Pink Floyd", src: "Songs/Pink Floyd - Another Brick In The Wall.mp3" },
    { title: "Gimme Back My Bulletts", artist: "Lynyrd Skynyrd", src: "Songs/Lynyrd Skynyrd (3).mp3" },
    { title: "One of These Days", artist: "Joe Bonamassa", src: "Songs/05 One of These Days.mp3" },
    { title: "Wishing Well", artist: "Black Sabbath", src: "Songs/Black Sabbath (1).mp3" },
    { title: "Slow Train", artist: "Joe Bonamassa", src: "Songs/10 Slow Train.mp3" },
    { title: "Turn the Page", artist: "Bob Seger", src: "Songs/Bob Seger.mp3" },
    { title: "The Ballad of John Henry", artist: "Bob Bonamassa", src: "Songs/06 The Ballad of John Henry.mp3" },
    { title: "Cats In The Cradle", artist: "Harry Chapin", src: "Songs/Cats In The Cradle.mp3" },
    { title: "Logical Song", artist: "SuperTramp", src: "Songs/Supertramp (1).mp3" },
    { title: "Child in Time", artist: "Deep Purple", src: "Songs/Child In Time.mp3" },
    { title: "Black Magic Women", artist: "Santana", src: "Songs/Santana.mp3" },
    { title: "Swamp Music", artist: "Lynyrd Skynyrd", src: "Songs/lynyrd skynyrd (2).mp3" },
    { title: "Takin' It To The Streets", artist: "The Doobie Brothers", src: "Songs/The Doobie Brothers.mp3" },
    { title: "Sittin' On The Dock Of The Bay", artist: "Otis Redding", src: "Songs/Dock On The Bay.mp3" },
    { title: "Sara", artist: "Fleetwood Mac", src: "Songs/Sara (Fleetwood Mac cover).mp3" },
    { title: "Alabama Song (Whiskey Bar)", artist: "The Doors", src: "Songs/The Doors (4).mp3" },
    { title: "Riders on The Storm", artist: "The Doors", src: "Songs/Riders on the Storm.mp3" },
    { title: "Sweet Home Alabama", artist: "Kid Rock", src: "Songs/kid rock.mp3" },
    { title: "Drive", artist: "Joe Bonamassa", src: "Songs/12 Drive.mp3" },
    { title: "Blue and Evil", artist: "Joe Bonamassa", src: "Songs/07 Blue and Evil.mp3" },
    { title: "Wish You Were Here", artist: "Pink Floyd", src: "Songs/Pink Floyd - Wish You Were Here.mp3" },
    { title: "The Devil Went Down to Georgia", artist: "Charlie Daniels Band", src: "Songs/The Charlie Daniels Band.mp3" },
    { title: "Dust In The Wind", artist: "Kansas", src: "Songs/Dust In The Wind.mp3" },
    { title: "Several Species of Small Animals", artist: "Pink Floyd", src: "Songs/Pink floyd - Several Species of Small animals.mp3" },
    { title: "Schools Out", artist: "Stray Cats", src: "Songs/Stray Cats.mp3" },
    { title: "Perfect Strangers", artist: "Deep Purple", src: "Songs/Deep Purple (1).mp3" },
    { title: "Must Give Us Death II", artist: "Jimmy Page", src: "Songs/Jimmy page - must give us death II.mp3" },
    { title: "Johnny be Good", artist: "Chuck Berry", src: "Songs/chuck berry.mp3" },
    { title: "You're So Vain", artist: "Carly Simon", src: "Songs/You're So Vain.mp3" },
    { title: "Tears in Heaven", artist: "Elton John", src: "Songs/Tears in heaven.mp3" },
    { title: "The Chain", artist: "Fleetwood Mac", src: "Songs/The Chain.mp3" },
    { title: "Burn", artist: "Deep Purple", src: "Songs/Burn.mp3" },
    { title: "Texas Blues, Stevie Ray Vaughan", artist: "C.C.Rider", src: "Songs/C.C.Rider.mp3" },
    { title: "The Smashing Pumpkins", artist: "The Smashing Pumpkins", src: "Songs/The Smashing Pumpkins.mp3" },
    { title: "Ghost Song", artist: "The Doors", src: "Songs/The Doors (2).mp3" },
    { title: "Janie's Got A Gun", artist: "Aerosmith", src: "Songs/Aerosmith 2.mp3" },
    { title: "Sweet Emotions", artist: "Aerosmith", src: "Songs/Aerosmith.mp3" },
    { title: "Schools Out", artist: "Alice Cooper", src: "Songs/Alice Cooper - School's Out.mp3" },
    { title: "Burnin' Sky", artist: "Bad Company", src: "Songs/Bad Company.mp3" },
    { title: "Welcome To My Nightmare", artist: "Alice Cooper", src: "Songs/Alice Cooper - Welcome to My Nightmare.mp3" },
    { title: "Riot in Cell Block #9", artist: "The Blues Brothers", src: "Songs/The Blues Brothers.mp3" },
    { title: "Hey Stoopid", artist: "Alice Cooper", src: "Songs/Alice Cooper - Hey Stoopid.mp3" },
    { title: "Blues In B Flat Minor", artist: "Fleetwood Mac", src: "Songs/Blues In B Flat Minor.mp3" },
    { title: "Caffiene", artist: "Alice Cooper", src: "Songs/Alice Cooper - Caffeine.mp3" },
    { title: "Eighteen", artist: "Alice Cooper", src: "Songs/Alice Cooper - Eighteen 2.mp3" },
    { title: "Rock 'n' Roll Fantasy", artist: "Bad Company", src: "Songs/Bad Company.mp3" },
    { title: "Ballroom Blitz", artist: "Sweet", src: "Songs/Ballroom Blitz - Sweet cover.mp3" },
    { title: "War Pigs", artist: "Black Sabbath", src: "Songs/Black Sabbath.mp3" },
    { title: "Wishing Well", artist: "Black Sabbath", src: "Songs/Wishing Well.mp3" },
    { title: "But Anyway", artist: "Blues Traveler", src: "Songs/Blues Traveler (1).mp3" },
    { title: "Secret Agent Man", artist: "Blues Traveler", src: "Songs/Blues Traveler (2).mp3" },
    { title: "Stir It Up", artist: "Bob Marley", src: "Songs/Stir It Up.mp3" },
    { title: "Cocaine", artist: "Eric Claypton", src: "Songs/Cocaine.mp3" },
    { title: "Proud Mary", artist: "Creedence Clearwater Revival", src: "Songs/Creedence Clearwater Revival (5).mp3" },
    { title: "Dead Man's Blues", artist: "Supertramp", src: "Songs/Supertramp.mp3" },
    { title: "Sunglasses at Night", artist: "Corey Hart", src: "Songs/Sunglasses at Night.mp3" },
    { title: "I Heard It Through The Grapevine", artist: "Creedence Clearwater Revival", src: "Songs/Creedence Clearwater Revival (3).mp3" },
    { title: "White Room", artist: "Cream", src: "Songs/Cream - White Room.mp3" },
    { title: "Fortunate Son", artist: "Creedence Clearwater Revival", src: "Songs/Creedence Clearwater Revival (4).mp3" },
    { title: "Who'll Stop The Rain", artist: "Creedence Clearwater Revival", src: "Songs/Creedence Clearwater Revival (6).mp3" },
    { title: "CROSSROADS", artist: "Stevie Ray Vaughan", src: "Songs/CROSSROADS.mp3" },
    { title: "Mountain Time", artist: "Joe Bonamassa", src: "Songs/02 Mountain Time.mp3" },
    { title: "Highway Star", artist: "Deep Purple", src: "Songs/Highway Star.mp3" },
    { title: "Nadia", artist: "Jeff Beck", src: "Songs/Jeff Beck - Nadia.mp3" },
    { title: "I Know Where I Belong", artist: "Joe Bonamassa", src: "Songs/01 I Know Where I Belong.mp3" },
    { title: "White Summer", artist: "Jimmy Page", src: "Songs/White Summer (Jimmy Page).mp3" },
    { title: "The River", artist: "Joe Bonamassa", src: "Songs/03 The River.mp3" },
    { title: "Jamming", artist: "Bob Marley", src: "Songs/Bob Marley - Jamming.mp3" },
    { title: "Bridge to Better Days", artist: "Joe Bonanassa", src: "Songs/04 Bridge to Better Days.mp3" },
    { title: "Different Shades of Blue", artist: "Joe Bonamassa", src: "Songs/11 Different Shades of Blue.mp3" },
    { title: "House of the Rising Sun", artist: "The Animals", src: "Songs/House of the Rising Sun.mp3" },
    { title: "Driving Towards the Daylight", artist: "Joe Bonamassa", src: "Songs/09 Driving Towards the Daylight.mp3" },
    { title: "Hide in Your Shell", artist: "Supertramp", src: "Songs/Supertramp (4).mp3" },
    { title: "Cold Shot", artist: "Stevie Ray Vaughan", src: "Songs/Cold Shot.mp3" },
    { title: "Crossroads", artist: "Cream", src: "Songs/Cream - Crossroads.mp3" },
    { title: "Strange Brew", artist: "Cream", src: "Songs/Cream - Strange Brew.mp3" },
    { title: "Girls Just Wanna Have Fun", artist: "Cyndi Lauper", src: "Songs/Cyndi Lauper - Girls Just Wanna Have Fun.mp3" },
    { title: "Space Truckin'", artist: "Deep Purple", src: "Songs/Deep Purple - Space Truckin'.mp3" },
    { title: "American Pie", artist: "Don McLean", src: "Songs/Don McLean.mp3" },
    { title: "She Takes My Breath Away", artist: "Eddie Money", src: "Songs/Eddie Money - She Takes My Breath Away.mp3" },
    { title: "Against The Law", artist: "Edgar Winter", src: "Songs/Edgar Winter - Against The Law.mp3" },
    { title: "Frankenstein(Live)", artist: "Edgar Winter", src: "Songs/Edgar Winter - Frankenstein.mp3" },
    { title: "Crocodile Rock", artist: "Elton John", src: "Songs/Elton John - Crocodile Rock.mp3" },
    { title: "Candle In The Wind", artist: "Elton John", src: "Songs/Elton John - Candle in the Wind.mp3" },
    { title: "Tobacco Road", artist: "Edgar Winter", src: "Songs/Edgar Winter - Tobacco Road.mp3" },
    { title: "Green River", artist: "Creedence Clearwater Revival", src: "Songs/Creedence Clearwater Revival - Green River.mp3" },
    { title: "Way Down South", artist: "Edgar Winter", src: "Songs/Edgar Winter - Way Down South.mp3" },
    { title: "Free Ride", artist: "Edgar Winter", src: "Songs/Edgar Winter - Free Ride.mp3" },
    { title: "Money for Nothing", artist: "Dire Straits", src: "Songs/Money for Nothing.mp3" },
    { title: "Goodbye Yellow Brick Road", artist: "Elton John", src: "Songs/Elton John - Goodbye Yellow Brick Road.mp3" },
    { title: "Rocket Man", artist: "Elton John", src: "Songs/Elton John - Rocket Man (I Think It's Going Ti Be A Long Long Time).mp3" },
    { title: "Gold Dust Woman", artist: "Fleetwood Mac", src: "Songs/Fleetwood Mac - Gold Dust Woman.mp3" },
    { title: "Chunga's Revenge", artist: "Frank Zappa", src: "Songs/Frank Zappa - Chunga's Revenge.mp3" },
    { title: "Signs", artist: "Five Man Electric Band", src: "Songs/Five Man Electric Band - Signs.mp3" },
    { title: "Let It Rock(Live)", artist: "Eric Clapton & The Yardbirds", src: "Songs/Eric Clapton & The Yardbirds.mp3" },
    { title: "Welcome To The Jungle", artist: "Guns and Roses", src: "Songs/Guns and Roses.mp3" },
    { title: "Gypsy(Alternate Unedited Version)", artist: "Fleetwood Mac", src: "Songs/Gypsy (Alternate Unedited Version).mp3" },
    { title: "Loaded", artist: "Jeff Beck", src: "Songs/Jeff Beck - Loaded.mp3" },
    { title: "If The House Is A Rocking", artist: "Stevie Ray Vaughan", src: "Songs/If The House Is A Rocking.mp3" },
    { title: "Superstition", artist: "Jeff Beck", src: "Songs/Jeff Beck - Superstition.mp3" },
    { title: "Hyperdrive", artist: "Jefferson Starship", src: "Songs/Jefferson Starship - Hyperdrive.mp3" },
    { title: "White Rabbit", artist: "Jefferson Starship", src: "Songs/Jefferson Starship - White Rabbit.mp3" },
    { title: "Queenie", artist: "Jerry Lee Lewis", src: "Songs/Jerry Lee Lewis.mp3" },
    { title: "Jesse", artist: "Carly Simon", src: "Songs/Jesse.mp3" },
    { title: "Boat Drinks", artist: "Jimmy Buffett", src: "Songs/Jimmy Buffett - Boat Drinks.mp3" },
    { title: "Fruitcakes", artist: "Jimmy Buffett", src: "Songs/Jimmy Buffett - Fruitcakes.mp3" },
    { title: "Grapefruit-Juicy Fruit", artist: "Jimmy Buffett", src: "Songs/Jimmy Buffett - Grapefruit-Juicy Fruit.mp3" },
    { title: "Rainbow in the Dark", artist: "Dio", src: "Songs/Rainbow in the Dark.mp3" },
    { title: "Pencil Thin Moustache", artist: "Jimmy Buffett", src: "Songs/Jimmy Buffett - Pencil Thin Moustache.mp3" },
    { title: "Jimmy Page Solo", artist: "Jimmy Page", src: "Songs/Jimmy Page Solo.mp3" },
    { title: "Jump", artist: "Van Halen", src: "Songs/Jump.mp3" },
    { title: "Lay Down Sally", artist: "Eric Clapton", src: "Songs/Lay Down Sally (Eric Clapton).mp3" },
    { title: "Lucille", artist: "Jerry Lee Lewis", src: "Songs/Lucille.mp3" },
    { title: "Lenny", artist: "Stevie Ray Vaughan", src: "Songs/Lenny (Stevie Ray Vaughan).mp3" },
    { title: "Swamp Music", artist: "Lynyrd Skynyrd", src: "Songs/lynyrd skynyrd (2).mp3" },
    { title: "Sweet Home Alabama", artist: "Lynyrd Skynyrd", src: "Songs/Lynyrd Skynyrd - Sweet Home Alabama.mp3" },
    { title: "Invisible Man", artist: "Peter Frampton", src: "Songs/Peter Frampton - Invisible Man.mp3" },
    { title: "Thank You Mr Churchill", artist: "Peter Frampton", src: "Songs/Peter Frampton - Thank You Mr Churchill.mp3" },
    { title: "Time", artist: "Pink Floyd", src: "Songs/Pink Floyd - Time.mp3" },
    { title: "Brain Damage", artist: "Pink Floyd", src: "Songs/Pink Floyd - Brain Damage.mp3" },
    { title: "Money", artist: "Pink Floyd", src: "Songs/Pink Floyd (1).mp3" },
    { title: "Evil Ways", artist: "Santana", src: "Songs/Santana - Evil Ways.mp3" },
    { title: "Pride & Joy", artist: "Stevie Ray Vaughan", src: "Songs/Pride & Joy (Stevie Ray Vaughan).mp3" },
    { title: "Rude Mood Jam", artist: "Stevie Ray Vaughan", src: "Songs/Rude Mood jam (Stevie Ray Vaughan).mp3" },
    { title: "The Sky Is Crying", artist: "Stevie Ray Vaughan", src: "Songs/Stevie Ray Vaughan (1).mp3" },
    { title: "Sray Cat Strut", artist: "Stray Cats", src: "Songs/Stray Cats (1).mp3" },
    { title: "Texas Flood", artist: "Stevie Ray Vaughan", src: "Songs/Stevie Ray Vaughan Texas Flood Cover.mp3" },
    { title: "Black Water", artist: "The Doobie Brothers", src: "Songs/The Doobie Brothers - Black Water.mp3" },
    { title: "The Chain", artist: "Fleetwood Mac", src: "Songs/TheChain.mp3" },
    { title: "Jailhouse Rock", artist: "The Blue Brothers", src: "Songs/The Blues Brothers (1).mp3" },
    { title: "China Grove", artist: "The Doobie Brothers", src: "Songs/The Doobie Brothers - China Grove.mp3" },
    { title: "Rubber Biscuit(Live)", artist: "The Blues Brothers", src: "Songs/The Blues Brothers (2).mp3" },
    { title: "Freeze Frame", artist: "The J. Geils Band", src: "Songs/The J. Geils Band - Freeze-Frame.mp3" },
    { title: "Can't You See", artist: "The Marshall Tucker Band'", src: "Songs/The Marshall Tucker Band - Can't You See.mp3" },
    { title: "Fire On The Mountain", artist: "The Marshall Tucker Band", src: "Songs/The Marshall Tucker Band - Fire on the Mountain.mp3" },
    { title: "Ramblin'", artist: "The Marshall Tucker Band", src: "Songs/The Marshall Tucker Band - Ramblin'.mp3" },
    { title: "Diablo Canyon", artist: "The Outlaws", src: "Songs/The Outlaws - Diablo Canyon.mp3" },
    { title: "Green Grass & High Tides", artist: "The Outlaws", src: "Songs/The Outlaws - Green Grass & High Tides.mp3" },
    { title: "Hot For Teacher", artist: "Van Halen", src: "Songs/Van Halen - Hot For Teacher.mp3" },
    { title: "Ice Cream Man", artist: "Van Halen", src: "Songs/Van Halen.mp3" },
    { title: "Beautiful Girl", artist: "Van Halen", src: "Songs/Van Halen (1).mp3" },
    { title: "Stop", artist: "Joe Bonamassa", src: "Songs/Joe (1).mp3" },
    { title: "Dust Bowl", artist: "Joe Bonamassa", src: "Songs/Joe.mp3" },
    { title: "Soul Man", artist: "Blues Brothers", src: "Songs/blues brothers.mp3" },
    { title: "Have You Ever Seen The Rain", artist: "Creedence Clearwater Revival", src: "Songs/Creedence Clearwater Revival (6).mp3" },
    { title: "Roadhouse Blues(Live)", artist: "The Doors", src: "Songs/The Doors.mp3" },
    { title: "The Wasp", artist: "The Doors", src: "Songs/The Doors (1).mp3" },
    { title: "Wanted Dead or Alive", artist: "Jon Bon Jovi", src: "Songs/Wanted Dead or Alive.mp3" },
    { title: "Blaze of Glory", artist: "Jon Bon Jovi", src: "Songs/Blaze of Glory.mp3" },
    { title: "Smokin' In the Boys Room", artist: "Brownsville Station", src: "Songs/Smokin' In The Boys Room.mp3" },
    { title: "In The Air Tonight (Live)", artist: "Phil Collins", src: "Songs/In The Air Tonight (Live).mp3" },
    { title: "Oh, Pretty Woman (Live, Black ‘n’ White Night)", artist: "Roy Orbison", src: "Songs/Pretty Woman (Black ‘n’ White Night Live).mp3" },
    { title: "Piano Man", artist: "Billy Joel", src: "Songs/Piano Man.mp3" },
    { title: "A Horse with No Name", artist: "America", src: "Songs/A Horse with No Name.mp3" },
    { title: "Sweet Dreams (Are Made of This)", artist: "Marilyn Manson", src: "Songs/Sweet Dreams (Are Made of This).mp3" },
    { title: "Workin' for MCA", artist: "Lynyrd Skynyrd", src: "Songs/lynyrd skynyrd (1).mp3" },
    { title: "Double Trouble", artist: "Lynyrd Skynyrd", src: "Songs/lynyrd skynyrd.mp3" },
    { title: "Burn It To The Ground", artist: "Nickleback ", src: "Songs/Nickleback (1).mp3" },
    { title: "If Today Was Your Last Day", artist: "Nickleback", src: "Songs/nickleback.mp3" },
    { title: "Rockstar", artist: "Nickleback", src: "Songs/Nickleback (2).mp3" }
    
    
        
        
       
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
