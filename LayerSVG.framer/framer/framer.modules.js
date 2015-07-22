require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"LayerSVG":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.LayerSVG = (function(superClass) {
  extend(LayerSVG, superClass);

  function LayerSVG(options) {
    if (options == null) {
      options = {};
    }
    if (options.width == null) {
      options.width = Framer.Defaults.Layer.width;
    }
    if (options.height == null) {
      options.height = Framer.Defaults.Layer.height;
    }
    if (options.id == null) {
      options.id = "svg";
    }
    options.html = "<svg id='" + options.id + "' width='" + options.width + "' height='" + options.height + "'><defs></defs></svg>";
    LayerSVG.__super__.constructor.call(this, options);
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

  LayerSVG.prototype.animate = function(options) {
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



},{}],"LayerSVG":[function(require,module,exports){
// Generated by CoffeeScript 1.9.1
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.LayerSVG = (function(superClass) {
  extend(LayerSVG, superClass);

  function LayerSVG(options) {
    if (options == null) {
      options = {};
    }
    if (options.width == null) {
      options.width = Framer.Defaults.Layer.width;
    }
    if (options.height == null) {
      options.height = Framer.Defaults.Layer.height;
    }
    if (options.id == null) {
      options.id = "svg";
    }
    options.html = "<svg id='" + options.id + "' width='" + options.width + "' height='" + options.height + "'><defs></defs></svg>";
    LayerSVG.__super__.constructor.call(this, options);
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

  LayerSVG.prototype.animate = function(options) {
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

},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9zaG10dWNrZXIvR2l0SHViL0xheWVyU1ZHL0xheWVyU1ZHLmZyYW1lci9tb2R1bGVzL0xheWVyU1ZHLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2pvc2htdHVja2VyL0dpdEh1Yi9MYXllclNWRy9MYXllclNWRy5mcmFtZXIvbW9kdWxlcy9MYXllclNWRy5qcyIsIi9Vc2Vycy9qb3NobXR1Y2tlci9HaXRIdWIvTGF5ZXJTVkcvTGF5ZXJTVkcuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQTs2QkFBQTs7QUFBQSxPQUFhLENBQUM7QUFDYiw4QkFBQSxDQUFBOztBQUFhLEVBQUEsa0JBQUMsT0FBRCxHQUFBOztNQUFDLFVBQVE7S0FFckI7O01BQUEsT0FBTyxDQUFDLFFBQVMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7S0FBdkM7O01BQ0EsT0FBTyxDQUFDLFNBQVUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7S0FEeEM7O01BRUEsT0FBTyxDQUFDLEtBQU07S0FGZDtBQUFBLElBR0EsT0FBTyxDQUFDLElBQVIsR0FBZSxXQUFBLEdBQVksT0FBTyxDQUFDLEVBQXBCLEdBQXVCLFdBQXZCLEdBQWtDLE9BQU8sQ0FBQyxLQUExQyxHQUFnRCxZQUFoRCxHQUE0RCxPQUFPLENBQUMsTUFBcEUsR0FBMkUsdUJBSDFGLENBQUE7QUFBQSxJQUtBLDBDQUFNLE9BQU4sQ0FMQSxDQUFBO0FBQUEsSUFTQSxJQUFDLENBQUEsTUFBRCxHQUFVLEVBVFYsQ0FBQTtBQUFBLElBVUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxFQVZULENBQUE7QUFBQSxJQVdBLElBQUMsQ0FBQSxTQUFELEdBQWEsRUFYYixDQUZZO0VBQUEsQ0FBYjs7QUFBQSxx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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsWUFBaEIsQ0FBQTs7QUFBQSxPQUVPLENBQUMsVUFBUixHQUFxQixTQUFBLEdBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOLEVBRG9CO0FBQUEsQ0FGckIsQ0FBQTs7QUFBQSxPQUtPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUxsQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIGV4cG9ydHMuTGF5ZXJTVkcgZXh0ZW5kcyBMYXllciBcblx0Y29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuXHRcdFxuXHRcdG9wdGlvbnMud2lkdGggPz0gRnJhbWVyLkRlZmF1bHRzLkxheWVyLndpZHRoXG5cdFx0b3B0aW9ucy5oZWlnaHQgPz0gRnJhbWVyLkRlZmF1bHRzLkxheWVyLmhlaWdodFxuXHRcdG9wdGlvbnMuaWQgPz0gXCJzdmdcIlxuXHRcdG9wdGlvbnMuaHRtbCA9IFwiPHN2ZyBpZD0nI3tvcHRpb25zLmlkfScgd2lkdGg9JyN7b3B0aW9ucy53aWR0aH0nIGhlaWdodD0nI3tvcHRpb25zLmhlaWdodH0nPjxkZWZzPjwvZGVmcz48L3N2Zz5cIlxuXHRcdFxuXHRcdHN1cGVyIG9wdGlvbnNcblxuXHRcdCNAc3ZnID0gQC5xdWVyeVNlbGVjdG9yKFwiIyN7b3B0aW9ucy5pZH1cIilcdFxuXG5cdFx0QHNoYXBlcyA9IHt9XG5cdFx0QG1hc2tzID0ge31cblx0XHRAY2xpcFBhdGhzID0ge31cblxuXHRhZGRTaGFwZTogKG9wdGlvbnM9e30pIC0+XG5cdFx0c2hhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcIiN7b3B0aW9ucy5zaGFwZX1cIikgXG5cblx0XHRmb3Igb3duIG9wdGlvbiwgdmFsdWUgb2Ygb3B0aW9uc1xuXHRcdFx0XHRpZiBvcHRpb24gaXNudCBcInNoYXBlXCJcblx0XHRcdFx0XHRzaGFwZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIiN7b3B0aW9ufVwiLCBcIiN7b3B0aW9uc1tvcHRpb25dfVwiKVxuXG5cdFx0QHN2Zy5hcHBlbmRDaGlsZChzaGFwZSlcblx0XHRAc2hhcGVzW1wiI3tvcHRpb25zLmlkfVwiXSA9IHNoYXBlXG5cblx0XHRyZXR1cm4gc2hhcGVcblxuXHRhZGREZWY6IChvcHRpb25zPXt9KSAtPlxuXHRcdGRlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiI3tvcHRpb25zLnR5cGV9XCIpXG5cdFx0ZGVmLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaWRcIiwgXCIje29wdGlvbnMuaWR9XCIpXG5cblx0XHRpZiBkZWYgaXMgXCJjbGlwUGF0aFwiIG9yIFwibWFza1wiXG5cdFx0XHRmb3Igc2hhcGUgaW4gb3B0aW9ucy5zaGFwZXNcblx0XHRcdFx0aWYgdHlwZW9mKHNoYXBlKSBpcyBcInN0cmluZ1wiXG5cdFx0XHRcdFx0c2hhcGUgPSBALnN2Zy5nZXRFbGVtZW50QnlJZChcIiN7c2hhcGV9XCIpXG5cdFx0XHRcdGRlZi5hcHBlbmRDaGlsZChzaGFwZSlcblxuXHRcdGRlZnMgPSBALnN2Zy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRlZnNcIilbMF1cblx0XHRkZWZzLmFwcGVuZENoaWxkKGRlZilcblxuXHRcdGlmIG9wdGlvbnMudHlwZSBpcyBcImNsaXBQYXRoXCIgdGhlbiBAY2xpcFBhdGhzW1wiI3tvcHRpb25zLmlkfVwiXSA9IGRlZiBlbHNlIEBtYXNrc1tcIiN7b3B0aW9ucy5pZH1cIl0gPSBkZWZcblxuXHRhZGRUb0RlZjogKGVsZW1lbnRzLCBkZWYsIHByZXZFbGVtZW50KSAtPlxuXHRcdGlmIHR5cGVvZihkZWYpIGlzIFwic3RyaW5nXCJcblx0XHRcdGRlZiA9IEAuc3ZnLmdldEVsZW1lbnRCeUlkKFwiI3tkZWZ9XCIpXG5cblx0XHRpZiAhQXJyYXkuaXNBcnJheShlbGVtZW50cylcblx0XHRcdGVsZW1lbnQgPSBlbGVtZW50c1xuXHRcdFx0aWYgdHlwZW9mKGVsZW1lbnQpIGlzIFwic3RyaW5nXCJcblx0XHRcdFx0ZWxlbWVudCA9IEAuc3ZnLmdldEVsZW1lbnRCeUlkKFwiI3tlbGVtZW50fVwiKVxuXG5cdFx0XHRpZiAhcHJldkVsZW1lbnRcblx0XHRcdFx0ZGVmLmFwcGVuZENoaWxkKGVsZSlcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZGVmLmluc2VydEJlZm9yZShlbGVtZW50LCBwcmV2RWxlbWVudClcblxuXHRcdGVsc2Vcblx0XHRcdGZvciBlbGVtZW50IGluIGVsZW1lbnRzXG5cdFx0XHRcdGlmIHR5cGVvZihlbGVtZW50KSBpcyBcInN0cmluZ1wiXG5cdFx0XHRcdFx0ZWxlbWVudCA9IEAuc3ZnLmdldEVsZW1lbnRCeUlkKFwiI3tlbGVtZW50fVwiKVxuXG5cdFx0XHRcdGlmICFwcmV2RWxlbWVudFxuXHRcdFx0XHRcdGRlZi5hcHBlbmRDaGlsZChlbGVtZW50KVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZGVmLmluc2VydEJlZm9yZShlbGVtZW50LCBwcmV2RWxlbWVudClcblxuXHRhbmltYXRlOiAob3B0aW9ucz17fSkgLT5cblx0XHRhbmltYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImFuaW1hdGVcIilcblx0XHRcblx0XHRmb3Igb3duIG9wdGlvbiwgdmFsdWUgb2Ygb3B0aW9uc1xuXHRcdFx0XHRpZiBvcHRpb24gaXNudCBcInNoYXBlXCJcblx0XHRcdFx0XHRhbmltYXRpb24uc2V0QXR0cmlidXRlTlMobnVsbCwgXCIje29wdGlvbn1cIiwgXCIje29wdGlvbnNbb3B0aW9uXX1cIilcblxuXHRcdG9wdGlvbnMuc2hhcGUuYXBwZW5kQ2hpbGQoYW5pbWF0aW9uKVxuXG5cblx0bWFzazogKHNoYXBlLCBtYXNrKSAtPlxuXHRcdGlmIHR5cGVvZihzaGFwZSkgaXMgXCJzdHJpbmdcIlxuXHRcdFx0c2hhcGUgPSBALnN2Zy5nZXRFbGVtZW50QnlJZChcIiN7c2hhcGV9XCIpXG5cblx0XHRpZiB0eXBlb2YobWFzaykgaXNudCBcInN0cmluZ1wiXG5cdFx0XHRtYXNrID0gbWFzay5nZXRBdHRyaWJ1dGVOUyhudWxsLCBcImlkXCIpXG5cblx0XHRzaGFwZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIm1hc2tcIiwgXCJ1cmwoIyN7bWFza30pXCIpXG5cblx0Y2xpcFBhdGg6IChzaGFwZSwgY2xpcFBhdGgpIC0+XG5cdFx0aWYgdHlwZW9mKHNoYXBlKSBpcyBcInN0cmluZ1wiXG5cdFx0XHRzaGFwZSA9IEAuc3ZnLmdldEVsZW1lbnRCeUlkKFwiI3tzaGFwZX1cIilcblxuXHRcdGlmIHR5cGVvZihjbGlwUGF0aCkgaXNudCBcInN0cmluZ1wiXG5cdFx0XHRjbGlwUGF0aCA9IGNsaXBQYXRoLmdldEF0dHJpYnV0ZU5TKG51bGwsIFwiaWRcIilcblxuXHRcdHNoYXBlLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiY2xpcC1wYXRoXCIsIFwidXJsKCMje2NsaXBQYXRofSlcIilcblxuXG5cbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS45LjFcbnZhciBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuZXhwb3J0cy5MYXllclNWRyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChMYXllclNWRywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gTGF5ZXJTVkcob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMud2lkdGggPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucy53aWR0aCA9IEZyYW1lci5EZWZhdWx0cy5MYXllci53aWR0aDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaGVpZ2h0ID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMuaGVpZ2h0ID0gRnJhbWVyLkRlZmF1bHRzLkxheWVyLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaWQgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucy5pZCA9IFwic3ZnXCI7XG4gICAgfVxuICAgIG9wdGlvbnMuaHRtbCA9IFwiPHN2ZyBpZD0nXCIgKyBvcHRpb25zLmlkICsgXCInIHdpZHRoPSdcIiArIG9wdGlvbnMud2lkdGggKyBcIicgaGVpZ2h0PSdcIiArIG9wdGlvbnMuaGVpZ2h0ICsgXCInPjxkZWZzPjwvZGVmcz48L3N2Zz5cIjtcbiAgICBMYXllclNWRy5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLnNoYXBlcyA9IHt9O1xuICAgIHRoaXMubWFza3MgPSB7fTtcbiAgICB0aGlzLmNsaXBQYXRocyA9IHt9O1xuICB9XG5cbiAgTGF5ZXJTVkcucHJvdG90eXBlLmFkZFNoYXBlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBvcHRpb24sIHNoYXBlLCB2YWx1ZTtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHNoYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJcIiArIG9wdGlvbnMuc2hhcGUpO1xuICAgIGZvciAob3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICAgIGlmICghaGFzUHJvcC5jYWxsKG9wdGlvbnMsIG9wdGlvbikpIGNvbnRpbnVlO1xuICAgICAgdmFsdWUgPSBvcHRpb25zW29wdGlvbl07XG4gICAgICBpZiAob3B0aW9uICE9PSBcInNoYXBlXCIpIHtcbiAgICAgICAgc2hhcGUuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJcIiArIG9wdGlvbiwgXCJcIiArIG9wdGlvbnNbb3B0aW9uXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHNoYXBlKTtcbiAgICB0aGlzLnNoYXBlc1tcIlwiICsgb3B0aW9ucy5pZF0gPSBzaGFwZTtcbiAgICByZXR1cm4gc2hhcGU7XG4gIH07XG5cbiAgTGF5ZXJTVkcucHJvdG90eXBlLmFkZERlZiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmLCBkZWZzLCBpLCBsZW4sIHJlZiwgc2hhcGU7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBkZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcIlwiICsgb3B0aW9ucy50eXBlKTtcbiAgICBkZWYuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJpZFwiLCBcIlwiICsgb3B0aW9ucy5pZCk7XG4gICAgaWYgKGRlZiA9PT0gXCJjbGlwUGF0aFwiIHx8IFwibWFza1wiKSB7XG4gICAgICByZWYgPSBvcHRpb25zLnNoYXBlcztcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBzaGFwZSA9IHJlZltpXTtcbiAgICAgICAgaWYgKHR5cGVvZiBzaGFwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHNoYXBlID0gdGhpcy5zdmcuZ2V0RWxlbWVudEJ5SWQoXCJcIiArIHNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgICBkZWYuYXBwZW5kQ2hpbGQoc2hhcGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBkZWZzID0gdGhpcy5zdmcuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkZWZzXCIpWzBdO1xuICAgIGRlZnMuYXBwZW5kQ2hpbGQoZGVmKTtcbiAgICBpZiAob3B0aW9ucy50eXBlID09PSBcImNsaXBQYXRoXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNsaXBQYXRoc1tcIlwiICsgb3B0aW9ucy5pZF0gPSBkZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tzW1wiXCIgKyBvcHRpb25zLmlkXSA9IGRlZjtcbiAgICB9XG4gIH07XG5cbiAgTGF5ZXJTVkcucHJvdG90eXBlLmFkZFRvRGVmID0gZnVuY3Rpb24oZWxlbWVudHMsIGRlZiwgcHJldkVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCwgaSwgbGVuLCByZXN1bHRzO1xuICAgIGlmICh0eXBlb2YgZGVmID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBkZWYgPSB0aGlzLnN2Zy5nZXRFbGVtZW50QnlJZChcIlwiICsgZGVmKTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzKSkge1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnRzO1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLnN2Zy5nZXRFbGVtZW50QnlJZChcIlwiICsgZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoIXByZXZFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBkZWYuYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWYuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHByZXZFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBlbGVtZW50ID0gdGhpcy5zdmcuZ2V0RWxlbWVudEJ5SWQoXCJcIiArIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJldkVsZW1lbnQpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goZGVmLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goZGVmLmluc2VydEJlZm9yZShlbGVtZW50LCBwcmV2RWxlbWVudCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gIH07XG5cbiAgTGF5ZXJTVkcucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGFuaW1hdGlvbiwgb3B0aW9uLCB2YWx1ZTtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiYW5pbWF0ZVwiKTtcbiAgICBmb3IgKG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAoIWhhc1Byb3AuY2FsbChvcHRpb25zLCBvcHRpb24pKSBjb250aW51ZTtcbiAgICAgIHZhbHVlID0gb3B0aW9uc1tvcHRpb25dO1xuICAgICAgaWYgKG9wdGlvbiAhPT0gXCJzaGFwZVwiKSB7XG4gICAgICAgIGFuaW1hdGlvbi5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIlwiICsgb3B0aW9uLCBcIlwiICsgb3B0aW9uc1tvcHRpb25dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnMuc2hhcGUuYXBwZW5kQ2hpbGQoYW5pbWF0aW9uKTtcbiAgfTtcblxuICBMYXllclNWRy5wcm90b3R5cGUubWFzayA9IGZ1bmN0aW9uKHNoYXBlLCBtYXNrKSB7XG4gICAgaWYgKHR5cGVvZiBzaGFwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgc2hhcGUgPSB0aGlzLnN2Zy5nZXRFbGVtZW50QnlJZChcIlwiICsgc2hhcGUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1hc2sgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1hc2sgPSBtYXNrLmdldEF0dHJpYnV0ZU5TKG51bGwsIFwiaWRcIik7XG4gICAgfVxuICAgIHJldHVybiBzaGFwZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIm1hc2tcIiwgXCJ1cmwoI1wiICsgbWFzayArIFwiKVwiKTtcbiAgfTtcblxuICBMYXllclNWRy5wcm90b3R5cGUuY2xpcFBhdGggPSBmdW5jdGlvbihzaGFwZSwgY2xpcFBhdGgpIHtcbiAgICBpZiAodHlwZW9mIHNoYXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBzaGFwZSA9IHRoaXMuc3ZnLmdldEVsZW1lbnRCeUlkKFwiXCIgKyBzaGFwZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2xpcFBhdGggIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNsaXBQYXRoID0gY2xpcFBhdGguZ2V0QXR0cmlidXRlTlMobnVsbCwgXCJpZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoYXBlLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiY2xpcC1wYXRoXCIsIFwidXJsKCNcIiArIGNsaXBQYXRoICsgXCIpXCIpO1xuICB9O1xuXG4gIHJldHVybiBMYXllclNWRztcblxufSkoTGF5ZXIpO1xuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
