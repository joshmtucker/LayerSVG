require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"LayerSVG":[function(require,module,exports){
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

},{}],"LayerSVG":[function(require,module,exports){
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



},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9qb3NobXR1Y2tlci9HaXRIdWIvTGF5ZXJTVkcvTGF5ZXJTVkcuZnJhbWVyL21vZHVsZXMvTGF5ZXJTVkcuanMiLCIvVXNlcnMvam9zaG10dWNrZXIvR2l0SHViL0xheWVyU1ZHL0xheWVyU1ZHLmZyYW1lci9tb2R1bGVzL0xheWVyU1ZHLmNvZmZlZSIsIi9Vc2Vycy9qb3NobXR1Y2tlci9HaXRIdWIvTGF5ZXJTVkcvTGF5ZXJTVkcuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QSxHQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTixFQURvQjtBQUFBLENBRnJCLENBQUE7O0FBQUEsT0FLTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FMbEIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuOS4xXG52YXIgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmV4cG9ydHMuTGF5ZXJTVkcgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoTGF5ZXJTVkcsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIExheWVyU1ZHKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIExheWVyU1ZHLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuaHRtbCA9IFwiPHN2ZyBpZD0nXCIgKyBvcHRpb25zLmlkICsgXCInIHdpZHRoPSdcIiArIHRoaXMud2lkdGggKyBcIicgaGVpZ2h0PSdcIiArIHRoaXMuaGVpZ2h0ICsgXCInPjxkZWZzPjwvZGVmcz48L3N2Zz5cIjtcbiAgICB0aGlzLnN2ZyA9IHRoaXMucXVlcnlTZWxlY3RvcihcIiNcIiArIG9wdGlvbnMuaWQpO1xuICAgIHRoaXMuc2hhcGVzID0ge307XG4gICAgdGhpcy5tYXNrcyA9IHt9O1xuICAgIHRoaXMuY2xpcFBhdGhzID0ge307XG4gIH1cblxuICBMYXllclNWRy5wcm90b3R5cGUuYWRkU2hhcGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbiwgc2hhcGUsIHZhbHVlO1xuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgc2hhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcIlwiICsgb3B0aW9ucy5zaGFwZSk7XG4gICAgZm9yIChvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgaWYgKCFoYXNQcm9wLmNhbGwob3B0aW9ucywgb3B0aW9uKSkgY29udGludWU7XG4gICAgICB2YWx1ZSA9IG9wdGlvbnNbb3B0aW9uXTtcbiAgICAgIGlmIChvcHRpb24gIT09IFwic2hhcGVcIikge1xuICAgICAgICBzaGFwZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIlwiICsgb3B0aW9uLCBcIlwiICsgb3B0aW9uc1tvcHRpb25dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQoc2hhcGUpO1xuICAgIHRoaXMuc2hhcGVzW1wiXCIgKyBvcHRpb25zLmlkXSA9IHNoYXBlO1xuICAgIHJldHVybiBzaGFwZTtcbiAgfTtcblxuICBMYXllclNWRy5wcm90b3R5cGUuYWRkRGVmID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBkZWYsIGRlZnMsIGksIGxlbiwgcmVmLCBzaGFwZTtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGRlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiXCIgKyBvcHRpb25zLnR5cGUpO1xuICAgIGRlZi5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImlkXCIsIFwiXCIgKyBvcHRpb25zLmlkKTtcbiAgICBpZiAoZGVmID09PSBcImNsaXBQYXRoXCIgfHwgXCJtYXNrXCIpIHtcbiAgICAgIHJlZiA9IG9wdGlvbnMuc2hhcGVzO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHNoYXBlID0gcmVmW2ldO1xuICAgICAgICBpZiAodHlwZW9mIHNoYXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgc2hhcGUgPSB0aGlzLnN2Zy5nZXRFbGVtZW50QnlJZChcIlwiICsgc2hhcGUpO1xuICAgICAgICB9XG4gICAgICAgIGRlZi5hcHBlbmRDaGlsZChzaGFwZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlZnMgPSB0aGlzLnN2Zy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRlZnNcIilbMF07XG4gICAgZGVmcy5hcHBlbmRDaGlsZChkZWYpO1xuICAgIGlmIChvcHRpb25zLnR5cGUgPT09IFwiY2xpcFBhdGhcIikge1xuICAgICAgcmV0dXJuIHRoaXMuY2xpcFBhdGhzW1wiXCIgKyBvcHRpb25zLmlkXSA9IGRlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubWFza3NbXCJcIiArIG9wdGlvbnMuaWRdID0gZGVmO1xuICAgIH1cbiAgfTtcblxuICBMYXllclNWRy5wcm90b3R5cGUuYWRkVG9EZWYgPSBmdW5jdGlvbihlbGVtZW50cywgZGVmLCBwcmV2RWxlbWVudCkge1xuICAgIHZhciBlbGVtZW50LCBpLCBsZW4sIHJlc3VsdHM7XG4gICAgaWYgKHR5cGVvZiBkZWYgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGRlZiA9IHRoaXMuc3ZnLmdldEVsZW1lbnRCeUlkKFwiXCIgKyBkZWYpO1xuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHMpKSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudHM7XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuc3ZnLmdldEVsZW1lbnRCeUlkKFwiXCIgKyBlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICghcHJldkVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGRlZi5hcHBlbmRDaGlsZChlbGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZi5pbnNlcnRCZWZvcmUoZWxlbWVudCwgcHJldkVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLnN2Zy5nZXRFbGVtZW50QnlJZChcIlwiICsgZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcmV2RWxlbWVudCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChkZWYuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChkZWYuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHByZXZFbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgfTtcblxuICBMYXllclNWRy5wcm90b3R5cGUubWFzayA9IGZ1bmN0aW9uKHNoYXBlLCBtYXNrKSB7XG4gICAgaWYgKHR5cGVvZiBzaGFwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgc2hhcGUgPSB0aGlzLnN2Zy5nZXRFbGVtZW50QnlJZChcIlwiICsgc2hhcGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1hc2sgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1hc2sgPSBtYXNrLmdldEF0dHJpYnV0ZU5TKG51bGwsIFwiaWRcIik7XG4gICAgfVxuICAgIHJldHVybiBzaGFwZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIm1hc2tcIiwgXCJ1cmwoI1wiICsgbWFzayArIFwiKVwiKTtcbiAgfTtcblxuICBMYXllclNWRy5wcm90b3R5cGUuY2xpcFBhdGggPSBmdW5jdGlvbihzaGFwZSwgY2xpcFBhdGgpIHtcbiAgICBpZiAodHlwZW9mIHNoYXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBzaGFwZSA9IHRoaXMuc3ZnLmdldEVsZW1lbnRCeUlkKFwiXCIgKyBzaGFwZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2xpcFBhdGggIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNsaXBQYXRoID0gY2xpcFBhdGguZ2V0QXR0cmlidXRlTlMobnVsbCwgXCJpZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoYXBlLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiY2xpcC1wYXRoXCIsIFwidXJsKCNcIiArIGNsaXBQYXRoICsgXCIpXCIpO1xuICB9O1xuXG4gIHJldHVybiBMYXllclNWRztcblxufSkoTGF5ZXIpO1xuIiwiY2xhc3MgZXhwb3J0cy5MYXllclNWRyBleHRlbmRzIExheWVyIFxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnM9e30pIC0+XG5cdFx0XG5cdFx0c3VwZXIgb3B0aW9uc1xuXG5cdFx0QGh0bWwgPSBcIjxzdmcgaWQ9JyN7b3B0aW9ucy5pZH0nIHdpZHRoPScje0Aud2lkdGh9JyBoZWlnaHQ9JyN7QC5oZWlnaHR9Jz48ZGVmcz48L2RlZnM+PC9zdmc+XCJcblx0XHRAc3ZnID0gQC5xdWVyeVNlbGVjdG9yKFwiIyN7b3B0aW9ucy5pZH1cIilcdFxuXG5cdFx0QHNoYXBlcyA9IHt9XG5cdFx0QG1hc2tzID0ge31cblx0XHRAY2xpcFBhdGhzID0ge31cblxuXHRhZGRTaGFwZTogKG9wdGlvbnM9e30pIC0+XG5cdFx0c2hhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcIiN7b3B0aW9ucy5zaGFwZX1cIikgXG5cblx0XHRmb3Igb3duIG9wdGlvbiwgdmFsdWUgb2Ygb3B0aW9uc1xuXHRcdFx0XHRpZiBvcHRpb24gaXNudCBcInNoYXBlXCJcblx0XHRcdFx0XHRzaGFwZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIiN7b3B0aW9ufVwiLCBcIiN7b3B0aW9uc1tvcHRpb25dfVwiKVxuXG5cdFx0QHN2Zy5hcHBlbmRDaGlsZChzaGFwZSlcblx0XHRAc2hhcGVzW1wiI3tvcHRpb25zLmlkfVwiXSA9IHNoYXBlXG5cblx0XHRyZXR1cm4gc2hhcGVcblxuXHRhZGREZWY6IChvcHRpb25zPXt9KSAtPlxuXHRcdGRlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiI3tvcHRpb25zLnR5cGV9XCIpXG5cdFx0ZGVmLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaWRcIiwgXCIje29wdGlvbnMuaWR9XCIpXG5cblx0XHRpZiBkZWYgaXMgXCJjbGlwUGF0aFwiIG9yIFwibWFza1wiXG5cdFx0XHRmb3Igc2hhcGUgaW4gb3B0aW9ucy5zaGFwZXNcblx0XHRcdFx0aWYgdHlwZW9mKHNoYXBlKSBpcyBcInN0cmluZ1wiXG5cdFx0XHRcdFx0c2hhcGUgPSBALnN2Zy5nZXRFbGVtZW50QnlJZChcIiN7c2hhcGV9XCIpXG5cdFx0XHRcdGRlZi5hcHBlbmRDaGlsZChzaGFwZSlcblxuXHRcdGRlZnMgPSBALnN2Zy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRlZnNcIilbMF1cblx0XHRkZWZzLmFwcGVuZENoaWxkKGRlZilcblxuXHRcdGlmIG9wdGlvbnMudHlwZSBpcyBcImNsaXBQYXRoXCIgdGhlbiBAY2xpcFBhdGhzW1wiI3tvcHRpb25zLmlkfVwiXSA9IGRlZiBlbHNlIEBtYXNrc1tcIiN7b3B0aW9ucy5pZH1cIl0gPSBkZWZcblxuXHRhZGRUb0RlZjogKGVsZW1lbnRzLCBkZWYsIHByZXZFbGVtZW50KSAtPlxuXHRcdGlmIHR5cGVvZihkZWYpIGlzIFwic3RyaW5nXCJcblx0XHRcdGRlZiA9IEAuc3ZnLmdldEVsZW1lbnRCeUlkKFwiI3tkZWZ9XCIpXG5cblx0XHRpZiAhQXJyYXkuaXNBcnJheShlbGVtZW50cylcblx0XHRcdGVsZW1lbnQgPSBlbGVtZW50c1xuXHRcdFx0aWYgdHlwZW9mKGVsZW1lbnQpIGlzIFwic3RyaW5nXCJcblx0XHRcdFx0ZWxlbWVudCA9IEAuc3ZnLmdldEVsZW1lbnRCeUlkKFwiI3tlbGVtZW50fVwiKVxuXG5cdFx0XHRpZiAhcHJldkVsZW1lbnRcblx0XHRcdFx0ZGVmLmFwcGVuZENoaWxkKGVsZSlcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZGVmLmluc2VydEJlZm9yZShlbGVtZW50LCBwcmV2RWxlbWVudClcblxuXHRcdGVsc2Vcblx0XHRcdGZvciBlbGVtZW50IGluIGVsZW1lbnRzXG5cdFx0XHRcdGlmIHR5cGVvZihlbGVtZW50KSBpcyBcInN0cmluZ1wiXG5cdFx0XHRcdFx0ZWxlbWVudCA9IEAuc3ZnLmdldEVsZW1lbnRCeUlkKFwiI3tlbGVtZW50fVwiKVxuXG5cdFx0XHRcdGlmICFwcmV2RWxlbWVudFxuXHRcdFx0XHRcdGRlZi5hcHBlbmRDaGlsZChlbGVtZW50KVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZGVmLmluc2VydEJlZm9yZShlbGVtZW50LCBwcmV2RWxlbWVudClcblxuXHRtYXNrOiAoc2hhcGUsIG1hc2spIC0+XG5cdFx0aWYgdHlwZW9mKHNoYXBlKSBpcyBcInN0cmluZ1wiXG5cdFx0XHRzaGFwZSA9IEAuc3ZnLmdldEVsZW1lbnRCeUlkKFwiI3tzaGFwZX1cIilcblxuXHRcdGlmIHR5cGVvZihtYXNrKSBpc250IFwic3RyaW5nXCJcblx0XHRcdG1hc2sgPSBtYXNrLmdldEF0dHJpYnV0ZU5TKG51bGwsIFwiaWRcIilcblxuXHRcdHNoYXBlLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwibWFza1wiLCBcInVybCgjI3ttYXNrfSlcIilcblxuXHRjbGlwUGF0aDogKHNoYXBlLCBjbGlwUGF0aCkgLT5cblx0XHRpZiB0eXBlb2Yoc2hhcGUpIGlzIFwic3RyaW5nXCJcblx0XHRcdHNoYXBlID0gQC5zdmcuZ2V0RWxlbWVudEJ5SWQoXCIje3NoYXBlfVwiKVxuXG5cdFx0aWYgdHlwZW9mKGNsaXBQYXRoKSBpc250IFwic3RyaW5nXCJcblx0XHRcdGNsaXBQYXRoID0gY2xpcFBhdGguZ2V0QXR0cmlidXRlTlMobnVsbCwgXCJpZFwiKVxuXG5cdFx0c2hhcGUuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJjbGlwLXBhdGhcIiwgXCJ1cmwoIyN7Y2xpcFBhdGh9KVwiKVxuXG5cblxuXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
