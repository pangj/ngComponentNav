(function () {
  'use strict';

  /**
   * This is the main module for our appliation
   */
  var appModule =  angular.module('app', ['ngComponentRouter', 'movies', 'homeComponent', 'about'])
    .config(function($locationProvider) {
	    $locationProvider.html5Mode(true);
	  })
	.value('$routerRootComponent', 'app')
    .component('app', {
	  templateUrl: '/js/components/appComponent.html',
	  $routeConfig: [
	    { path: '/home', component: 'homeComponent', name: 'Home', useAsDefault: true },
	    { path: '/about',component: 'aboutComponent', name : 'About'},
	    { path: '/movies/...', component: 'movies', name: 'Movies' },	    
	    { path: '/**', redirectTo: ['Home'] }
	  ]
	})
; 
  

  
})();
