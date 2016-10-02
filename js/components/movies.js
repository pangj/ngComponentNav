/**
 * js/components/movies.js
 */

(function () {
	"use strict";

	angular.module('movies', [])
	  .service('movieService', MovieService)
	  .component('movies', {
		templateUrl: '/js/components/movieListComponent.html',
	    $routeConfig: [
	      {path: '/',    name: 'MovieList',   component: 'movieListComponent', useAsDefault: true},
	      {path: '/:id', name: 'MovieDetail', component: 'movieDetail'}
	    ]
	  })  
  .component('movieListComponent', {
	   templateUrl: '/js/components/movieListComponent.html',
       controller: MovieListComponent
     })

  .component('movieDetail', {
	  templateUrl: '/js/components/movieDetailsComponent.html',
      bindings: { $router: '<' },
      controller: MovieDetailComponent
    });

	
	function MovieListComponent(movieService) {
		    var selectedId = null;
		    var $ctrl = this;

		    this.$routerOnActivate = function(next, previous) {
		      // Load up the moviees for this view
		      return movieService.getMovies().then(function(movies) {
		        $ctrl.movies = movies;
		        selectedId = next.params.id;
		      });
		    };

		    this.isSelected = function(movie) {
		      return (movie.id == selectedId);
		    };
		  }

   function MovieDetailComponent(movieService) {
		    var $ctrl = this;

		    this.$routerOnActivate = function(next, previous) {
		      // Get the movie identified by the route parameter
		      var id = next.params.id;
		      return movieService.getMovie(id).then(function(movie) {
		        $ctrl.movie = movie;
		      });
		    };

		    this.gotoMovies = function() {
		      var movieId = this.movie && this.movie.id;
		      this.$router.navigate(['MovieList', {id: movieId}]);
		    };
	}	
	  
   function MovieService($q) {
		  var moviesPromise = $q.when([
		    { id: 1, image:'image/flower10.jpg', title: 'Mr. Flower 10', length: 120, rating: 5 },
		    { id: 2, image:'image/flower11.jpg', title: 'Bombasto', length: 120, rating: 5 },
		    { id: 3, image:'image/insect7.jpg', title: 'Celeritas', length: 120, rating: 3 },
		    { id: 4, image:'image/insect6.jpg', title: 'Magneta', length: 120, rating: 5 },
		    { id: 5, image:'image/insect4.jpg', title: 'RubberMan', length: 120, rating: 3 },
		    { id: 6, image:'image/insect21.jpg', title: 'Mr. Flower 21', length: 120, rating: 5 },
		    { id: 7, image:'image/insect2.jpg', title: 'Mrs. Insect 2', length: 120, rating: 5 },
		    { id: 8, image:'image/insect19.jpg', title: 'Mr. Insect 10', length: 120, rating: 5 },
		    { id: 9, image:'image/insect18.jpg', title: 'Mr. Insect 20', length: 120, rating: 5 },
		    { id: 10, image:'image/insect16.jpg', title: 'Mr. Insect Brother', length: 120, rating: 5 },
		    { id: 11, image:'image/insect14.jpg', title: 'Mrs. Insect Sister', length: 120, rating: 5 },
		    { id: 12, image:'image/insect13.jpg', title: 'Mr. Inset Uncle', length: 120, rating: 5 },
		    { id: 13, image:'image/insect11.jpg', title: 'Mrs. Insect Aunt', length: 120, rating: 5 },
		    { id: 14, image:'image/insect0.jpg', title: 'Mr. Insect Cousin', length: 120, rating: 5 },
		    { id: 15, image:'image/flower18.jpg', title: 'Mr. Insect Green', length: 120, rating: 5 },
		    { id: 16, image:'image/flower17.jpg', title: 'Mr. Insect Colourful', length: 120, rating: 5 },
		    { id: 17, image:'image/flower16.jpg', title: 'Mr. Insect Red', length: 120, rating: 5 },
		    { id: 18, image:'image/flower15.jpg', title: 'Mr. Insect Light Green', length: 120, rating: 5 },
		    { id: 19, image:'image/flower13.jpg', title: 'Mr. Insect Brown', length: 120, rating: 5 }
		  ]);
		  
		  this.getMovies = function() {
			    return moviesPromise;
			  };
		  this.getMovie = function(id) {
			    return moviesPromise.then(function(movies) {
			      for(var i=0; i<movies.length; i++) {
			        if ( movies[i].id == id) return movies[i];
			      }
			    });
			  };
		  
	  };
	  
	  
	  
})();