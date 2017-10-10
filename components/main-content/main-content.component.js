(function() {

  'use strict';

   angular
    .module('rangi')
    .component('mainContent', {
      bindings: {
        palettes: '<',
        onColorClicked: '&'
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
      $onChanges: function(changes) {
        
      }
    }
})();