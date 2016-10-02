(function () {
  'use strict';
  /**
   * Get our component module and name it home
   */

  angular.module('about', [])
  .component('aboutComponent', {
    bindings: {
      '$router': '<'
    },
    templateUrl: '/js/components/about.html',
    controller: AboutController
  });

  /**
   * Home component controller
   */

  function AboutController() {
    var $ctrl = this;

    $ctrl.head = 'About Admin Control Panel';

    $ctrl.message = 'Mimecast Email Admin and Configuration Console version 0.001';

  }

})();
