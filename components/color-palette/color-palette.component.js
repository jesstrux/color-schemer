(function() {

  'use strict';

   angular
    .module('rangi')
    .component('colorPalette', {
      bindings: {
        palette: '<',
        name: '@'
      },
      templateUrl: "components/color-palette/color-palette.html",
      controller: ColorPalette
    });

    function ColorPalette() {
      this.name = "";
    }

    ColorPalette.prototype = {
      $onInit: function() {
        // this.loadUtils();
      },
      loadUtils: function() {
        var self = this;
      }
    }
})();