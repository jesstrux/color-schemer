const tinycolor = require("tinycolor2");

angular
  .module('rangi')
  .component('tinyColor', {
    bindings: {
      color: '=',
      palettes: '=',
      tinycolor: '='
    },
    controller: TinyColor
  });

function TinyColor() {
  this.palettes = [];
}

TinyColor.prototype = {
  $onInit: function() {
    this.tinycolor = tinycolor(this.color);
    this.setPalettes();
  },

  $onChanged: function() {
    // this.tinycolor = tinycolor(this.color);
    // this.color = this.tinycolor.toString();
    // this.setPalettes();
    // console.log("TinyColor changed");
    // console.log(this.color);
  },

  darken: function(val) {
    var val = val || 10;
    this.color = this.tinycolor.darken(val).toString();
  },

  lighten: function(val) {
    var val = val || 10;
    this.color = this.tinycolor.lighten(val).toString();
  },

  saturate: function(val) {
    var val = val || 10;
    this.color = this.tinycolor.saturate(val).toString();
  },

  desaturate: function(val) {
    var val = val || 10;
    this.color = this.tinycolor.desaturate(val).toString();
  },

  greyscale: function(val) {
    var val = val || 10;
    this.color = this.tinycolor.greyscale(val).toString();
  },

  spin: function(val) {
    var val = val || 10;
    this.color = this.tinycolor.spin(val).toString();
  },

  setPalettes: function(){
    var color = this.tinycolor;
    var palettes = [];
    var monochromatic = this.asStringArray(color.monochromatic());
    var analogous = this.asStringArray(color.analogous());
    var triad = this.asStringArray(color.triad());
    var complement = this.asStringArray(color.complement());
    var splitcomplement = this.asStringArray(color.splitcomplement());
    var tetrad = this.asStringArray(color.tetrad());

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

  asStringArray: function(colors){
    return Array.from(colors).map(function(t) { return t.toHexString(); });
  }
}