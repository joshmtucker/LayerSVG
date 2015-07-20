// Generated by CoffeeScript 1.9.1
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.LayerSVG = (function(superClass) {
  var _insertBefore;

  extend(LayerSVG, superClass);

  function LayerSVG(options) {
    if (options == null) {
      options = {};
    }
    LayerSVG.__super__.constructor.call(this, options);
    this.shapes = {};
    this.masks = {};
    this.html = "<svg id='" + options.id + "' width='" + this.width + "' height='" + this.height + "'><defs></defs></svg>";
    this.svg = this.querySelector("#" + options.id);
  }

  LayerSVG.prototype.addShape = function(options) {
    var option, shape, value;
    if (options == null) {
      options = {};
    }
    if (options.shape === "rectangle") {
      options.shape = "rect";
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

  LayerSVG.prototype.addMask = function(id, shapes) {
    var defs, i, len, mask, shape;
    mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
    mask.setAttributeNS(null, "id", "" + id);
    if (!Array.isArray(shapes)) {
      shape = shapes;
      if (typeof shape === "string") {
        shape = this.svg.getElementById("" + shape);
        mask.appendChild(shape);
      } else {
        mask.appendChild(shape);
      }
    } else {
      for (i = 0, len = shapes.length; i < len; i++) {
        shape = shapes[i];
        if (typeof shape === "string") {
          shape = this.svg.getElementById("" + shape);
          mask.appendChild(shape);
        } else {
          mask.appendChild(shape);
        }
      }
    }
    defs = this.svg.getElementsByTagName("defs")[0];
    defs.appendChild(mask);
    return this.masks["" + id] = mask;
  };

  LayerSVG.prototype.addToMask = function(shapes, mask, prevShape) {
    var i, len, results, shape;
    if (!Array.isArray(shapes)) {
      shape = shapes;
      if (typeof shape === "string") {
        shape = this.svg.getElementById("" + shape);
      }
      return _insertBefore(shape, mask, prevShape);
    } else {
      results = [];
      for (i = 0, len = shapes.length; i < len; i++) {
        shape = shapes[i];
        print(shape);
        if (typeof shape === "string") {
          shape = this.svg.getElementById("" + element);
        }
        results.push(_insertBefore(shape, mask, prevShape));
      }
      return results;
    }
  };

  LayerSVG.prototype.mask = function(shape, mask) {
    if (typeof mask !== "string") {
      mask = mask.getAttributeNS(null, "id");
    }
    return shape.setAttributeNS(null, "mask", "url(#" + mask + ")");
  };

  _insertBefore = function(shape, mask, prevShape) {
    if (!prevShape) {
      return mask.appendChild(shape);
    } else {
      if (typeof prevShape === "string") {
        prevShape = this.svg.getElementById("" + prevShape);
      }
      return mask.insertBefore(shape, prevShape);
    }
  };

  return LayerSVG;

})(Layer);
