//To make sure the providers are accessible throughout the application, inject them using the config block on the application's root module. Write a config function to pass into the config() function
(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
        .html5Mode({
//setting the html5Mode method's enabled property to true, the hashbang URLs are disabled; that is, users will see clean URLs without the hashbang.
            enabled: true,
//Setting the requireBase property to false is unrelated to the hashbang issue, but is one way to avoid a common $location error.
            requireBase: false
        });
//$stateProvider calls .state(), which takes two arguments: stateName and stateConfig
//stateName is a unique string that identifies a state. stateConfig is an object that defines specific properties of the state.
//create a state named landing and add an accompanying URL and template to the stateConfig object
    $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: '/template/landing.html'
//Because $stateProvider.state() returns $stateProvider, we are able to call state() again
//without having to reference the $stateProvider variable. With no arguments passed to the state() call,
//this would look like $stateProvider.state().state(). This is called method chaining.
//It's common to chain state() calls instead of calling them individually on $stateProvider. Add another state, named album
        })
//Note that chained calls should not have a semicolon at the end of each call.
//If you include them, you will receive an error. Chained calls require only a single semicolon after the last call, which signifies the termination
        .state('album', {
            url: '/album',
            templateUrl: '/template/album.html'
        })
//Implement a third state named collection for the Collection view
        .state('collection', {
            url: '/collection',
            templateUrl: '/template/collection.html'
        });
  }

  angular
  //inject the module into the application by adding it to the array
      .module('blocJams', ['ui.router'])
      .config(config)
})();
