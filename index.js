class Jukebox {
	constructor(audio) {
		this.song = audio;
		this.songs = ['01overture.m4a', '04outfoxthefox.m4a', '07livetolove.m4a']
		this.currentSongIndex = 0;
	}

	playAudio() {
		this.song.play();
	}

	pauseAudio() {
		this.song.pause();
	}

	stopAudio() {
		this.song.pause();
		this.song.currentTime = 0;
	}

	nextAudio() {
		this.currentSongIndex++;
		this.song.setAttribute('src', 'songs/' + this.songs[this.currentSongIndex]);
		this.song.load();
	}
}

var audio = document.getElementById('myAudio');
var jukebox = new Jukebox(audio);

document.getElementById('playbutton').addEventListener('click', function() {
	jukebox.playAudio();
})

document.getElementById('pausebutton').addEventListener('click', function() {
	jukebox.pauseAudio();
})

document.getElementById('stopbutton').addEventListener('click', function() {
	jukebox.stopAudio();
})

document.getElementById('nextbutton').addEventListener('click', function() {
	jukebox.nextAudio();
})