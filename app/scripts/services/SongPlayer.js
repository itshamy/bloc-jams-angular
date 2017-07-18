(function(){
  function SongPlayer(Fixtures){
    var SongPlayer = {};

    /**
    * @function getSongIndex
    * @desc Get the index of a song
    * @type {Object} song
    * @return {Number} index
    */
    var getSongIndex = function(song){
      return currentAlbum.songs.indexOf(song);
    }

    /**
    * @function playSong
    * @desc Play new audio file
    * @param {Object} song
    */
    var playSong = function(song){
      currentBuzzObject.play();
      song.playing = true;
    };

    /**
    * @function stopSong
    * @desc Stop audio file
    * @param {Object} song
    */
    var stopSong = function(song){
      currentBuzzObject.stop();
      SongPlayer.currentSong.playing = null;
    };

    /**
    * @desc Active song object from list of songs
    * @type {Object}
    */
    SongPlayer.currentSong = null;

    /**
    * @desc Access songs from the Current Album
    * @type {Object}
    */
    var currentAlbum = Fixtures.getAlbum();

    /**
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null;

    /**
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */
    var setSong = function(song){
      if (currentBuzzObject){
        stopSong();
      }
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        format: ['mp3'],
        preload: true
      });
      currentSong = song;
    };

    /**
    * @method SongPlayer.play
    * @desc Set and play a new song when a user clicks
    * @param {Object} song
    */
    SongPlayer.play = function(song){
        song = song || SongPlayer.currentSong;
        if (currentSong !== song){
          setSong(song);
          playSong(song);
        } else if (currentSong === song){
            if (currentBuzzObject.isPaused()){
              currentBuzzObject.play();
            }
        }
      };

      /**
      * @method SongPlayer.pause
      * @desc Stop current playing song when a user clicks
      * @param {Object} song
      */
      SongPlayer.pause = function(song){
          song = song || SongPlayer.currentSong;
          currentBuzzObject.pause();
          song.playing = false;
      };

      /**
      * @method SongPlayer.previous
      * @desc Go to previous song
      */
      SongPlayer.previous = function(){
          var currentSongIndex = getSongIndex(SongPlayer.currentSong);
          currentSongIndex--;
          if (currentSongIndex < 0){
            stopSong();
          } else {
              var song = currentAlbum.songs[currentSongIndex];
              setSong(song);
              playSong(song);
          }
      };

      /**
      * @method SongPlayer.next
      * @desc Go to next song
      */
      SongPlayer.next = function(){
        var currentSongIndex = getSongIndex(SongPlayer.currentSong);
        currentSongIndex++;
        if(currentSongIndex > Object.keys(currentAlbum).length){
          currentSongIndex = 0;
          setSong(currentAlbum.songs[0]);
          playSong(currentAlbum.songs[0]);
        } else {
              var song = currentAlbum.songs[currentSongIndex];
              setSong(song);
              playSong(song);
          }
      };
  return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
