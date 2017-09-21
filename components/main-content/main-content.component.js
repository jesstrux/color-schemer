(function() {

  'use strict';

   angular
    .module('rangi')
    .component('mainContent', {
      bindings: {
        color: '='
      },
      templateUrl: "components/main-content/main-content.html",
      controller: MainContent
    });

    function MainContent() {
    }

    MainContent.prototype = {
      $onInit: function() {
        // this.loadUtils();
      },
      loadUtils: function() {
        var self = this;
      }
    }
})();