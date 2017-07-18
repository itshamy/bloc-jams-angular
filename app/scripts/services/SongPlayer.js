(function(){
  function SongPlayer(){
    var SongPlayer = {};
    var currentSong = null;

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
        currentBuzzObject.stop();
        currentBuzzObject.playing = null;
      }
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        format: ['mp3'],
        preload: true
      });
      currentSong = song;
    };

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
    * @method SongPlayer.play
    * @desc Set and play a new song when a user clicks
    * @param {Object} song
    */
    SongPlayer.play = function(song){
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
          currentBuzzObject.pause();
          song.playing = false;
      };
  return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
