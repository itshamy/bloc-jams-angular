(function(){
  function CollectionCrtl(Fixtures){
    this.albums = Fixtures.getCollection(12);
  }

  angular
    .module('blocJam')
    .controller('CollectionCrtl', CollectionCrtl);
})();
