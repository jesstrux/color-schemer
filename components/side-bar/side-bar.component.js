(function() {

  'use strict';
  const tinycolor = require("tinycolor2");

   angular
    .module('rangi')
    .component('sideBar', {
      bindings: {
        color: '<',
        onColorChange: '&'
      },
      templateUrl: "components/side-bar/side-bar.html",
      controller: SideBar
    });

    function SideBar() {
    }

    SideBar.prototype = {
      $onInit: function() {
        // this.loadUtils();
      },
      loadUtils: function() {
        var self = this;
      },
      darken: function(){
        this.color = tinycolor(this.color).darken(20).toHexString();
        this.onColorChange({$event: this.color});
      },
    }
})();