// Generated by CoffeeScript 1.9.1
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.LayerSVG = (function(superClass) {
  extend(LayerSVG, superClass);

  function LayerSVG(options) {
    if (options == null) {
      options = {};
    }
    LayerSVG.__super__.constructor.call(this, options);
    this.html = "<svg id='" + options.id + "' width='" + this.width + "' height='" + this.height + "'><defs></defs></svg>";
    this.svg = this.querySelector("#" + options.id);
    this.shapes = {};
    this.masks = {};
    this.clipPaths = {};
  }

  LayerSVG.prototype.addShape = function(options) {
    var option, shape, value;
    if (options == null) {
      options = {};
    }
    shape = document.createElementNS("http://www.w3.org/2000/svg", "" + options.shape);
    for (option in options) {
      if (!hasProp.call(options, option)) continue;
      value = options[option];
      if (option !== "shape") {
        shape.setAttributeNS(null, "" + option, "" + options[option]);
      }
    }
    this.svg.appendChild(shape);
    this.shapes["" + options.id] = shape;
    return shape;
  };

  LayerSVG.prototype.addDef = function(options) {
    var def, defs, i, len, ref, shape;
    if (options == null) {
      options = {};
    }
    def = document.createElementNS("http://www.w3.org/2000/svg", "" + options.type);
    def.setAttributeNS(null, "id", "" + options.id);
    if (def === "clipPath" || "mask") {
      ref = options.shapes;
      for (i = 0, len = ref.length; i < len; i++) {
        shape = ref[i];
        if (typeof shape === "string") {
          shape = this.svg.getElementById("" + shape);
        }
        def.appendChild(shape);
      }
    }
    defs = this.svg.getElementsByTagName("defs")[0];
    defs.appendChild(def);
    if (options.type === "clipPath") {
      return this.clipPaths["" + options.id] = def;
    } else {
      return this.masks["" + options.id] = def;
    }
  };

  LayerSVG.prototype.addToDef = function(elements, def, prevElement) {
    var element, i, len, results;
    if (typeof def === "string") {
      def = this.svg.getElementById("" + def);
    }
    if (!Array.isArray(elements)) {
      element = elements;
      if (typeof element === "string") {
        element = this.svg.getElementById("" + element);
      }
      if (!prevElement) {
        return def.appendChild(ele);
      } else {
        return def.insertBefore(element, prevElement);
      }
    } else {
      results = [];
      for (i = 0, len = elements.length; i < len; i++) {
        element = elements[i];
        if (typeof element === "string") {
          element = this.svg.getElementById("" + element);
        }
        if (!prevElement) {
          results.push(def.appendChild(element));
        } else {
          results.push(def.insertBefore(element, prevElement));
        }
      }
      return results;
    }
  };

  LayerSVG.prototype.addAnimation = function(options) {
    var animation, option, value;
    if (options == null) {
      options = {};
    }
    animation = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    for (option in options) {
      if (!hasProp.call(options, option)) continue;
      value = options[option];
      if (option !== "shape") {
        animation.setAttributeNS(null, "" + option, "" + options[option]);
      }
    }
    return options.shape.appendChild(animation);
  };

  LayerSVG.prototype.mask = function(shape, mask) {
    if (typeof shape === "string") {
      shape = this.svg.getElementById("" + shape);
    }
    if (typeof mask !== "string") {
      mask = mask.getAttributeNS(null, "id");
    }
    return shape.setAttributeNS(null, "mask", "url(#" + mask + ")");
  };

  LayerSVG.prototype.clipPath = function(shape, clipPath) {
    if (typeof shape === "string") {
      shape = this.svg.getElementById("" + shape);
    }
    if (typeof clipPath !== "string") {
      clipPath = clipPath.getAttributeNS(null, "id");
    }
    return shape.setAttributeNS(null, "clip-path", "url(#" + clipPath + ")");
  };

  return LayerSVG;

})(Layer);
