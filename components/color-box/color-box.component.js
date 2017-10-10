(function() {

  'use strict';

   angular
    .module('rangi')
    .component('colorBox', {
      bindings: {
        color: '<',
        showText: '@',
        onColorClicked: '&'
      },
      template: '<div ng-click-cop="{{$ctrl.color}}" ng-click="$ctrl.copyColor($ctrl.color)" class="layout center-center" style="transition: all 0.35s ease-out; text-align: center; font-size: 12px; min-height: 50px; min-width: 50px; height: inherit; background-color: {{$ctrl.color}}"><div ng-if="$ctrl.showText">{{$ctrl.color}}</div></div>',
      controller: ColorBox
    });

    function ColorBox() {
    }

    ColorBox.prototype = {
      $onInit: function() {
        
      },
      copyColor: function(color) {
        this.onColorClicked({color: color});
      }
    }
})();