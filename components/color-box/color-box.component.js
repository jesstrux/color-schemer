(function() {

  'use strict';

   angular
    .module('rangi')
    .component('colorBox', {
      bindings: {
        color: '<'
      },
      // templateUrl: "components/color-box/color-box.html",
      template: '<div style="min-height: 40px; min-width: 40px; height: inherit; background-color: {{$ctrl.color}}"></div>',
      controller: ColorBox
    });

    function ColorBox() {
    }

    ColorBox.prototype = {
      $onInit: function() {
        // this.loadUtils();
      },
      loadUtils: function() {
        var self = this;
      }
    }
})();