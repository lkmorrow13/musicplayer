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
		this.song.play();
	}

	audioTime() {
		var minutes = Math.floor(this.song.duration / 60);
		var seconds = Math.floor(this.song.duration - minutes * 60);
		seconds = seconds > 9 ? seconds : '0' + seconds;
		var mintime = Math.floor(this.song.currentTime / 60);
		var sectime = Math.floor(this.song.currentTime - mintime * 60);
		sectime = sectime > 9 ? sectime : '0' + sectime;
		return mintime + ' : ' + sectime + ' / ' + minutes + ' : ' + seconds;
		console.log(mintime + ' : ' + sectime);
		console.log(minutes + ' : ' + seconds);
	}

	getSongName() {
		return this.songs[this.currentSongIndex];
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

audio.addEventListener('play', function() {
	document.getElementById('songName').innerText = jukebox.getSongName();
})

audio.addEventListener('timeupdate', function() {
	document.getElementById('tracktime').innerHTML = jukebox.audioTime();
})
