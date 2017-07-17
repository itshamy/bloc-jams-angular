//Create a controller for the Album view
(function(){
//Inject the custom Fixtures service into the controller
  function AlbumCtrl(Fixtures){
//Update AlbumCtrl to use the Fixtures service's getAlbum() method
    this.albumData = Fixtures.getAlbum();
    this.songs = this.albumData.songs;
  }

  angular
    .module('blocJams')
//add Fixtures to AlbumCtrl's array of dependencies.
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
