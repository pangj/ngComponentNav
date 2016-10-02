(function () {
  'use strict';
  /**
   * Get our component module and name it home
   */

  var home = angular.module('homeComponent', []);

  /**
   * Define our Home component
   * @type {String}
   */

  home.component('homeComponent', {
    bindings: {
      '$router': '<'
    },
    templateUrl: '/js/components/HomeComponent.html',
    controller: [HomeController]
  });

  /**
   * Home component controller
   */

  function HomeController() {
    var self = this;

    self.head = 'Admin Control Panel';

    self.message = `
      Mimecast Console provides enterprise Email Configuration features, which suits the requirements of
      different types and sizes of organizations. The entire process is simple, and you can get custom
      domain based email address for all the members of organization, with no down time. The steps to
      migrate your Email Hosting to Mimecast is easy and efficent.`;

    self.button = 'Veiw Movies';

    self.goTo = function () {
      self.$router.navigate(['Movies', 'Details', { id: 1 }]);
    };
  }

})();
