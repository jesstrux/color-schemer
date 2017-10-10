const tinycolor = require("tinycolor2");

angular
  .module('rangi')
  .component('tinyColor', {
    bindings: {
      color: '<',
      rgb: '=',
      palettes: '=',
      onColorChange: '&'
    },
    controller: TinyColor
  });

function TinyColor($rootScope) {
  this.palettes = [];
  var self = this;

  $rootScope.$on("colorChanged",function(e, data){
    self.onColorChanged(data.color);
  });

  $rootScope.$on("manipulateColor",function(e, data){
    self.onManipulateColor(data.how);
  });

  this.onColorChanged = function(color){
    this.update(tinycolor(color));
  }

  this.onManipulateColor = function(how){
    console.log("Manipulate color", how);
    switch(how){
      case 'darken':
        this.darken();
        break;
      case 'lighten':
        this.lighten();
        break;  
      case 'saturate':
        this.saturate();
        break;
      case 'desaturate':
        this.desaturate();
        break;  
      case 'greyscale':
        this.greyscale();
        break;
      case 'spin':
        this.spin();
        break;         
    }
  }
}

TinyColor.prototype = {
  $onInit: function() {
    var tc = tinycolor(this.color);
    this.update(tc);
  },

  $onChanges: function() {
    var tc = tinycolor(this.color, true);
    this.update(tc);
  },

  update: function(tc, fromTop){
    this.tinycolor = tc;
    this.color = tc.toHexString();
    this.rgb = tc.toRgb();
    this.setPalettes();

    if(!fromTop)
      this.onColorChange({color: this.color});
  },

  darken: function(val) {
    var val = val || 10;
    this.update(this.tinycolor.darken(val));
  },

  lighten: function(val) {
    var val = val || 10;
    this.update(this.tinycolor.lighten(val));
  },

  saturate: function(val) {
    var val = val || 10;
    this.update(this.tinycolor.saturate(val));
  },

  desaturate: function(val) {
    var val = val || 10;
    this.update(this.tinycolor.desaturate(val));
  },

  greyscale: function(val) {
    var val = val || 10;
    this.update(this.tinycolor.greyscale(val));
  },

  spin: function(val) {
    var val = val || 10;
    this.update(this.tinycolor.spin(val));
  },

  setPalettes: function(){
    var color = this.tinycolor;
    var palettes = [];
    var monochromatic = this.asStringArray(color.monochromatic(), color.toHexString());
    var analogous = this.asStringArray(color.analogous(), color.toHexString());
    var triad = this.asStringArray(color.triad(), color.toHexString());
    var complement = this.asStringArray(color.complement(), color.toHexString());
    var splitcomplement = this.asStringArray(color.splitcomplement(), color.toHexString());
    var tetrad = this.asStringArray(color.tetrad(), color.toHexString());

    if(monochromatic && monochromatic.length){
      palettes.push({
        name: "Monochromatic",
        colors: monochromatic
      });
    }

    if(analogous && analogous.length){
      palettes.push({
        name: "Analogous",
        colors: analogous
      });
    }

    if(triad && triad.length){
      palettes.push({
        name: "Triads",
        colors: triad
      });
    }

    if(complement && complement.length){
      palettes.push({
        name: "Complements",
        colors: complement
      });
    }

    if(splitcomplement && splitcomplement.length){
      palettes.push({
        name: "Split Complements",
        colors: splitcomplement
      });
    }

    if(tetrad && tetrad.length){
      palettes.push({
        name: "Tetrads",
        colors: tetrad
      });
    }

    this.palettes = palettes;
  },

  asStringArray: function(colors, curColor){
    return Array.from(colors).map(function(t) { return t.toHexString(); }).filter(function(c) { return c != curColor; });
  }
}