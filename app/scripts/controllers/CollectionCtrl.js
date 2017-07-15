(function(){
  function CollectionCrtl(){
//Instead of using jQuery to append images, bind the data from the albumPicasso object to the Collection template
// add an albums property and set its value to an empty array.
//Within the for loop, we use angular.copy to make copies of albumPicasso and push them to the array.
    this.albums = [];
    for (var i = 0; i < 12, i++){
      this.album.push(angular.copy(albumPicasso));
    }
  }

  angular
    .module('blocJam')
    .controller('CollectionCrtl', CollectionCrtl);
})();
