//Create a controller for the Album view
(function(){
  function AlbumCtrl(){
    this.albumData = angular.copy(albumPicasso);
    this.songs = this.albumData.songs;
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();



<div class="collection-album-container column fourth" ng-repeat="album in collection.albums">
