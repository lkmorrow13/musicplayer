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

	audioTime() {
		ontimeupdate(document.getElementById('tracktime').innerHTML = Math.floor(this.currentTime) + ' / ' + Math.floor(this.duration));
	}
}