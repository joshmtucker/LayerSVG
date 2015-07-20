require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"LayerSVG":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.LayerSVG = (function(superClass) {
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
    if (shapes !== void 0) {
      for (i = 0, len = shapes.length; i < len; i++) {
        shape = shapes[i];
        if (shapes) {
          mask.appendChild(shape);
        }
      }
    }
    defs = this.svg.getElementsByTagName("defs")[0];
    return defs.appendChild(mask);
  };

  LayerSVG.prototype.addToMask = function(id, element) {
    var mask;
    if (typeof id !== "string") {
      id = id.getAttributeNS(null, "id");
      mask = this.svg.getElementById("" + id);
    } else {
      id = this.svg.getElementById("" + id);
      mask = id;
    }
    return mask.appendChild(element);
  };

  LayerSVG.prototype.mask = function(element, id) {
    if (typeof id !== "string") {
      id = id.getAttributeNS(null, "id");
    }
    return element.setAttributeNS(null, "mask", "url(#" + id + ")");
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
    if (shapes !== void 0) {
      for (i = 0, len = shapes.length; i < len; i++) {
        shape = shapes[i];
        if (shapes) {
          mask.appendChild(shape);
        }
      }
    }
    defs = this.svg.getElementsByTagName("defs")[0];
    return defs.appendChild(mask);
  };

  LayerSVG.prototype.addToMask = function(id, element) {
    var mask;
    if (typeof id !== "string") {
      id = id.getAttributeNS(null, "id");
      mask = this.svg.getElementById("" + id);
    } else {
      id = this.svg.getElementById("" + id);
      mask = id;
    }
    return mask.appendChild(element);
  };

  LayerSVG.prototype.mask = function(element, id) {
    if (typeof id !== "string") {
      id = id.getAttributeNS(null, "id");
    }
    return element.setAttributeNS(null, "mask", "url(#" + id + ")");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9zaG10dWNrZXIvR2l0SHViL0xheWVyU1ZHL0xheWVyU1ZHLmZyYW1lci9tb2R1bGVzL0xheWVyU1ZHLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2pvc2htdHVja2VyL0dpdEh1Yi9MYXllclNWRy9MYXllclNWRy5mcmFtZXIvbW9kdWxlcy9MYXllclNWRy5qcyIsIi9Vc2Vycy9qb3NobXR1Y2tlci9HaXRIdWIvTGF5ZXJTVkcvTGF5ZXJTVkcuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQTs2QkFBQTs7QUFBQSxPQUFhLENBQUM7QUFDYiw4QkFBQSxDQUFBOztBQUFhLEVBQUEsa0JBQUMsT0FBRCxHQUFBOztNQUFDLFVBQVE7S0FFckI7QUFBQSxJQUFBLDBDQUFNLE9BQU4sQ0FBQSxDQUFBO0FBQUEsSUFFQSxJQUFDLENBQUEsTUFBRCxHQUFVLEVBRlYsQ0FBQTtBQUFBLElBR0EsSUFBQyxDQUFBLEtBQUQsR0FBUyxFQUhULENBQUE7QUFBQSxJQUlBLElBQUMsQ0FBQSxJQUFELEdBQVEsV0FBQSxHQUFZLE9BQU8sQ0FBQyxFQUFwQixHQUF1QixXQUF2QixHQUFrQyxJQUFDLENBQUMsS0FBcEMsR0FBMEMsWUFBMUMsR0FBc0QsSUFBQyxDQUFDLE1BQXhELEdBQStELHVCQUp2RSxDQUFBO0FBQUEsSUFLQSxJQUFDLENBQUEsR0FBRCxHQUFPLElBQUMsQ0FBQyxhQUFGLENBQWdCLEdBQUEsR0FBSSxPQUFPLENBQUMsRUFBNUIsQ0FMUCxDQUZZO0VBQUEsQ0FBYjs7QUFBQSxxQkFVQSxRQUFBLEdBQVUsU0FBQyxPQUFELEdBQUE7QUFFVCxRQUFBLG9CQUFBOztNQUZVLFVBQVE7S0FFbEI7QUFBQSxJQUFBLElBQUcsT0FBTyxDQUFDLEtBQVIs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsWUFBaEIsQ0FBQTs7QUFBQSxPQUVPLENBQUMsVUFBUixHQUFxQixTQUFBLEdBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOLEVBRG9CO0FBQUEsQ0FGckIsQ0FBQTs7QUFBQSxPQUtPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUxsQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIGV4cG9ydHMuTGF5ZXJTVkcgZXh0ZW5kcyBMYXllciBcblx0Y29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuXHRcdFxuXHRcdHN1cGVyIG9wdGlvbnNcblxuXHRcdEBzaGFwZXMgPSB7fVxuXHRcdEBtYXNrcyA9IHt9XG5cdFx0QGh0bWwgPSBcIjxzdmcgaWQ9JyN7b3B0aW9ucy5pZH0nIHdpZHRoPScje0Aud2lkdGh9JyBoZWlnaHQ9JyN7QC5oZWlnaHR9Jz48ZGVmcz48L2RlZnM+PC9zdmc+XCJcblx0XHRAc3ZnID0gQC5xdWVyeVNlbGVjdG9yKFwiIyN7b3B0aW9ucy5pZH1cIilcdFxuXG5cblx0YWRkU2hhcGU6IChvcHRpb25zPXt9KSAtPlxuXG5cdFx0aWYgb3B0aW9ucy5zaGFwZSBpcyBcInJlY3RhbmdsZVwiXG5cdFx0XHRvcHRpb25zLnNoYXBlID0gXCJyZWN0XCJcblxuXHRcdHNoYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCIje29wdGlvbnMuc2hhcGV9XCIpIFxuXG5cdFx0Zm9yIG93biBvcHRpb24sIHZhbHVlIG9mIG9wdGlvbnNcblx0XHRcdGlmIG9wdGlvbiBpc250IFwic2hhcGVcIlxuXHRcdFx0XHRzaGFwZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIiN7b3B0aW9ufVwiLCBcIiN7b3B0aW9uc1tvcHRpb25dfVwiKVxuXG5cdFx0QHN2Zy5hcHBlbmRDaGlsZChzaGFwZSlcblx0XHRAc2hhcGVzW1wiI3tvcHRpb25zLmlkfVwiXSA9IHNoYXBlXG5cblx0XHRyZXR1cm4gc2hhcGVcblxuXHRhZGRNYXNrOiAoaWQsIHNoYXBlcykgLT5cblx0XHRtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJtYXNrXCIpXG5cdFx0bWFzay5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImlkXCIsIFwiI3tpZH1cIilcblxuXHRcdGlmIHNoYXBlcyBpc250IHVuZGVmaW5lZFxuXHRcdFx0Zm9yIHNoYXBlIGluIHNoYXBlcyB3aGVuIHNoYXBlc1xuXHRcdFx0XHRtYXNrLmFwcGVuZENoaWxkKHNoYXBlKVxuXG5cdFx0ZGVmcyA9IEAuc3ZnLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGVmc1wiKVswXVxuXHRcdGRlZnMuYXBwZW5kQ2hpbGQobWFzaylcblxuXHRhZGRUb01hc2s6IChpZCwgZWxlbWVudCkgLT5cblx0XHRpZiB0eXBlb2YoaWQpIGlzbnQgXCJzdHJpbmdcIlxuXHRcdFx0aWQgPSBpZC5nZXRBdHRyaWJ1dGVOUyhudWxsLCBcImlkXCIpXG5cdFx0XHRtYXNrID0gQC5zdmcuZ2V0RWxlbWVudEJ5SWQoXCIje2lkfVwiKVxuXHRcdGVsc2UgXG5cdFx0XHRpZCA9IEAuc3ZnLmdldEVsZW1lbnRCeUlkKFwiI3tpZH1cIilcblx0XHRcdG1hc2sgPSBpZFxuXG5cdFx0bWFzay5hcHBlbmRDaGlsZChlbGVtZW50KVxuXG5cdG1hc2s6IChlbGVtZW50LCBpZCkgLT5cblx0XHRpZiB0eXBlb2YoaWQpIGlzbnQgXCJzdHJpbmdcIlxuXHRcdFx0aWQgPSBpZC5nZXRBdHRyaWJ1dGVOUyhudWxsLCBcImlkXCIpXG5cblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwibWFza1wiLCBcInVybCgjI3tpZH0pXCIpXG5cdFx0IiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjkuMVxudmFyIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5leHBvcnRzLkxheWVyU1ZHID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKExheWVyU1ZHLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBMYXllclNWRyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBMYXllclNWRy5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLnNoYXBlcyA9IHt9O1xuICAgIHRoaXMubWFza3MgPSB7fTtcbiAgICB0aGlzLmh0bWwgPSBcIjxzdmcgaWQ9J1wiICsgb3B0aW9ucy5pZCArIFwiJyB3aWR0aD0nXCIgKyB0aGlzLndpZHRoICsgXCInIGhlaWdodD0nXCIgKyB0aGlzLmhlaWdodCArIFwiJz48ZGVmcz48L2RlZnM+PC9zdmc+XCI7XG4gICAgdGhpcy5zdmcgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBvcHRpb25zLmlkKTtcbiAgfVxuXG4gIExheWVyU1ZHLnByb3RvdHlwZS5hZGRTaGFwZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9uLCBzaGFwZSwgdmFsdWU7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zaGFwZSA9PT0gXCJyZWN0YW5nbGVcIikge1xuICAgICAgb3B0aW9ucy5zaGFwZSA9IFwicmVjdFwiO1xuICAgIH1cbiAgICBzaGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiXCIgKyBvcHRpb25zLnNoYXBlKTtcbiAgICBmb3IgKG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAoIWhhc1Byb3AuY2FsbChvcHRpb25zLCBvcHRpb24pKSBjb250aW51ZTtcbiAgICAgIHZhbHVlID0gb3B0aW9uc1tvcHRpb25dO1xuICAgICAgaWYgKG9wdGlvbiAhPT0gXCJzaGFwZVwiKSB7XG4gICAgICAgIHNoYXBlLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiXCIgKyBvcHRpb24sIFwiXCIgKyBvcHRpb25zW29wdGlvbl0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChzaGFwZSk7XG4gICAgdGhpcy5zaGFwZXNbXCJcIiArIG9wdGlvbnMuaWRdID0gc2hhcGU7XG4gICAgcmV0dXJuIHNoYXBlO1xuICB9O1xuXG4gIExheWVyU1ZHLnByb3RvdHlwZS5hZGRNYXNrID0gZnVuY3Rpb24oaWQsIHNoYXBlcykge1xuICAgIHZhciBkZWZzLCBpLCBsZW4sIG1hc2ssIHNoYXBlO1xuICAgIG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcIm1hc2tcIik7XG4gICAgbWFzay5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImlkXCIsIFwiXCIgKyBpZCk7XG4gICAgaWYgKHNoYXBlcyAhPT0gdm9pZCAwKSB7XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSBzaGFwZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgc2hhcGUgPSBzaGFwZXNbaV07XG4gICAgICAgIGlmIChzaGFwZXMpIHtcbiAgICAgICAgICBtYXNrLmFwcGVuZENoaWxkKHNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBkZWZzID0gdGhpcy5zdmcuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkZWZzXCIpWzBdO1xuICAgIHJldHVybiBkZWZzLmFwcGVuZENoaWxkKG1hc2spO1xuICB9O1xuXG4gIExheWVyU1ZHLnByb3RvdHlwZS5hZGRUb01hc2sgPSBmdW5jdGlvbihpZCwgZWxlbWVudCkge1xuICAgIHZhciBtYXNrO1xuICAgIGlmICh0eXBlb2YgaWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlkID0gaWQuZ2V0QXR0cmlidXRlTlMobnVsbCwgXCJpZFwiKTtcbiAgICAgIG1hc2sgPSB0aGlzLnN2Zy5nZXRFbGVtZW50QnlJZChcIlwiICsgaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCA9IHRoaXMuc3ZnLmdldEVsZW1lbnRCeUlkKFwiXCIgKyBpZCk7XG4gICAgICBtYXNrID0gaWQ7XG4gICAgfVxuICAgIHJldHVybiBtYXNrLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9O1xuXG4gIExheWVyU1ZHLnByb3RvdHlwZS5tYXNrID0gZnVuY3Rpb24oZWxlbWVudCwgaWQpIHtcbiAgICBpZiAodHlwZW9mIGlkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZCA9IGlkLmdldEF0dHJpYnV0ZU5TKG51bGwsIFwiaWRcIik7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwibWFza1wiLCBcInVybCgjXCIgKyBpZCArIFwiKVwiKTtcbiAgfTtcblxuICByZXR1cm4gTGF5ZXJTVkc7XG5cbn0pKExheWVyKTtcbiIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iXX0=
