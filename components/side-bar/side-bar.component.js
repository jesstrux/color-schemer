(function() {

  'use strict';
  const tinycolor = require("tinycolor2");

   angular
    .module('rangi')
    .component('sideBar', {
      bindings: {
        color: '<',
        rgb: '<',
        onColorChange: '&',
        onManipulateColor: '&'
      },
      templateUrl: "components/side-bar/side-bar.html",
      controller: SideBar
    });

    function SideBar($localForage) {
      this.localForage = $localForage;
    }

    SideBar.prototype = {
      $onInit: function() {
        var self = this;

        this.localForage
          .getItem('lastColor').then(function(lastColor) {
            if(!lastColor)
                lastColor = "#000";

            self.updateColor(lastColor);  
          });
      },

      $onChanges: function(changes) {
        this.inputColor = this.color;
        this.updateColor(this.color, true);
      },

      setRgb: function(rgb) {
        this.updateColor(tinycolor(rgb).toHexString());
      },

      handleKey: function($event) {
        var color = $event.target.value;
        var tiny = tinycolor(color);

        if(tiny.isValid()){
          this.updateColor(color);
        }
      },

      updateColor: function(color, fromTop){
        this.color = color;
        this.colorBg = tinycolor(color).toHexString();

        var self = this;
        this.localForage
            .setItem('lastColor', color)
            .then(function(c){
                self.onColorChange({color: color});
            });
      }
    }
})();