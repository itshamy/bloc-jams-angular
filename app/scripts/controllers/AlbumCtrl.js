//Create a controller for the Album view
(function(){
//Inject the custom Fixtures service into the controller
  function AlbumCtrl(Fixtures, SongPlayer){
//Update AlbumCtrl to use the Fixtures service's getAlbum() method
    this.albumData = Fixtures.getAlbum();
//The songPlayer property holds the service and makes the service accessible within the Album view.
    this.songPlayer = SongPlayer;
  }

  angular
    .module('blocJams')
//add Fixtures to AlbumCtrl's array of dependencies.
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
