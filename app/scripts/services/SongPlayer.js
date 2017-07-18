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
//The play method takes an argument, song, which we'll get from the Album view when a user clicks the play button
//the ngRepeat directive used in the Album view template will dictate which song to pass into the function
    SongPlayer.play = function(song){
        if (currentSong !== song){
          setSong(song);
          currentBuzzObject.play();
          song.playing = true;
        } else if (currentSong === song){
            if (currentBuzzObject.isPaused()){
              currentBuzzObject.play();
            }
        }
      };
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
