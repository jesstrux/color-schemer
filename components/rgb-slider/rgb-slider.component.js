(function() {

  'use strict';

   angular
    .module('rangi')
    .component('rgbSlider', {
      bindings: {
        rgb: '<',
        onRgbChange: '&'
      },
      templateUrl: "components/rgb-slider/rgb-slider.html",
      controller: rgbSlider
    });

    function rgbSlider() {

    }

    rgbSlider.prototype = {
      $onChanges: function(changes) {

      },
      handleChange: function($event) {
        // var val = $event.target.value;
        this.onRgbChange({rgb: this.rgb});
      }
    }
})();