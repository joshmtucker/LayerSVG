require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"LayerSVG":[function(require,module,exports){
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.LayerSVG = (function(superClass) {
  extend(LayerSVG, superClass);

  function LayerSVG(options) {
    if (options == null) {
      options = {};
    }
    this.addShape = bind(this.addShape, this);
    this.shapes = {};
    LayerSVG.__super__.constructor.call(this, options);
    this.html = "<svg id='" + options.id + "' width='" + this.width + "' height='" + this.height + "'>/<svg>";
    this.svg = this.querySelector("#" + options.id);
  }

  LayerSVG.prototype.addShape = function(type, options) {
    var option, shape, value;
    if (options == null) {
      options = {};
    }
    shape = document.createElementNS("http://www.w3.org/2000/svg", "" + type);
    for (option in options) {
      if (!hasProp.call(options, option)) continue;
      value = options[option];
      shape.setAttributeNS(null, "" + option, "" + options[option]);
    }
    this.svg.appendChild(shape);
    this.shapes["" + options.id] = shape;
    return shape;
  };

  return LayerSVG;

})(Layer);



},{}],"LayerSVG":[function(require,module,exports){
// Generated by CoffeeScript 1.9.1
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.LayerSVG = (function(superClass) {
  extend(LayerSVG, superClass);

  function LayerSVG(options) {
    if (options == null) {
      options = {};
    }
    this.addShape = bind(this.addShape, this);
    this.shapes = {};
    LayerSVG.__super__.constructor.call(this, options);
    this.html = "<svg id='" + options.id + "' width='" + this.width + "' height='" + this.height + "'>/<svg>";
    this.svg = this.querySelector("#" + options.id);
  }

  LayerSVG.prototype.addShape = function(type, options) {
    var option, shape, value;
    if (options == null) {
      options = {};
    }
    shape = document.createElementNS("http://www.w3.org/2000/svg", "" + type);
    for (option in options) {
      if (!hasProp.call(options, option)) continue;
      value = options[option];
      shape.setAttributeNS(null, "" + option, "" + options[option]);
    }
    this.svg.appendChild(shape);
    this.shapes["" + options.id] = shape;
    return shape;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9zaG10dWNrZXIvR2l0SHViL0xheWVyU1ZHL0xheWVyU1ZHLmZyYW1lci9tb2R1bGVzL0xheWVyU1ZHLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2pvc2htdHVja2VyL0dpdEh1Yi9MYXllclNWRy9MYXllclNWRy5mcmFtZXIvbW9kdWxlcy9MYXllclNWRy5qcyIsIi9Vc2Vycy9qb3NobXR1Y2tlci9HaXRIdWIvTGF5ZXJTVkcvTGF5ZXJTVkcuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQTs7NkJBQUE7O0FBQUEsT0FBYSxDQUFDO0FBQ2IsOEJBQUEsQ0FBQTs7QUFBYSxFQUFBLGtCQUFDLE9BQUQsR0FBQTs7TUFBQyxVQUFRO0tBRXJCO0FBQUEsNkNBQUEsQ0FBQTtBQUFBLElBQUEsSUFBQyxDQUFDLE1BQUYsR0FBVyxFQUFYLENBQUE7QUFBQSxJQUVBLDBDQUFNLE9BQU4sQ0FGQSxDQUFBO0FBQUEsSUFJQSxJQUFDLENBQUMsSUFBRixHQUFTLFdBQUEsR0FBWSxPQUFPLENBQUMsRUFBcEIsR0FBdUIsV0FBdkIsR0FBa0MsSUFBQyxDQUFDLEtBQXBDLEdBQTBDLFlBQTFDLEdBQXNELElBQUMsQ0FBQyxNQUF4RCxHQUErRCxVQUp4RSxDQUFBO0FBQUEsSUFLQSxJQUFDLENBQUMsR0FBRixHQUFRLElBQUMsQ0FBQyxhQUFGLENBQWdCLEdBQUEsR0FBSSxPQUFPLENBQUMsRUFBNUIsQ0FMUixDQUZZO0VBQUEsQ0FBYjs7QUFBQSxxQkFVQSxRQUFBLEdBQVUsU0FBQyxJQUFELEVBQU8sT0FBUCxHQUFBO0FBQ1QsUUFBQSxvQkFBQTs7TUFEZ0IsVUFBUTtLQUN4QjtBQUFBLElBQUEsS0FBQSxHQUFRLFFBQVEsQ0FBQyxlQUFULENBQXlCLDRCQUF6QixFQUF1RCxFQUFBLEdBQUcsSUFBMUQsQ0FBUixDQUFBO0FBQ0EsU0FBQSxpQkFBQTs7OEJBQUE7QUFDQyxNQUFBLEtBQUssQ0FBQyxjQUFOLENBQXFCLElBQXJCLEVBQTJCLEVBQUEsR0FBRyxNQUE5QixFQUF3QyxFQUFBLEdBQUcsT0FBUSxDQUFBLE1BQUEsQ0FBbkQsQ0FBQSxDQUREO0FBQUEsS0FEQTtBQUFBLElBSUEsSUFBQyxDQUFDLEdBQUcsQ0FBQyxXQUFOLENBQWtCLEtBQWxCLENBSkEsQ0FBQTtBQUFBLElBS0EsSUFBQyxDQUFDLE1BQU8sQ0FBQSxFQUFBLEdBQUcsT0FBTyxDQUFDLEVBQVgsQ0FBVCxHQUE0QixLQUw1QixDQUFBO0FBT0EsV0FBTyxLQUFQLENBUlM7RUFBQSxDQVZWLENBQUE7O2tCQUFBOztHQUQ4QixNQUEvQixDQUFBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0EsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsWUFBaEIsQ0FBQTs7QUFBQSxPQUVPLENBQUMsVUFBUixHQUFxQixTQUFBLEdBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOLEVBRG9CO0FBQUEsQ0FGckIsQ0FBQTs7QUFBQSxPQUtPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUxsQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIGV4cG9ydHMuTGF5ZXJTVkcgZXh0ZW5kcyBMYXllciBcblx0Y29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuXG5cdFx0QC5zaGFwZXMgPSB7fVxuXHRcdFxuXHRcdHN1cGVyIG9wdGlvbnNcblxuXHRcdEAuaHRtbCA9IFwiPHN2ZyBpZD0nI3tvcHRpb25zLmlkfScgd2lkdGg9JyN7QC53aWR0aH0nIGhlaWdodD0nI3tALmhlaWdodH0nPi88c3ZnPlwiXG5cdFx0QC5zdmcgPSBALnF1ZXJ5U2VsZWN0b3IoXCIjI3tvcHRpb25zLmlkfVwiKVx0XG5cblxuXHRhZGRTaGFwZTogKHR5cGUsIG9wdGlvbnM9e30pID0+XG5cdFx0c2hhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcIiN7dHlwZX1cIilcblx0XHRmb3Igb3duIG9wdGlvbiwgdmFsdWUgb2Ygb3B0aW9uc1xuXHRcdFx0c2hhcGUuc2V0QXR0cmlidXRlTlMobnVsbCwgXCIje29wdGlvbn1cIiwgXCIje29wdGlvbnNbb3B0aW9uXX1cIilcblxuXHRcdEAuc3ZnLmFwcGVuZENoaWxkKHNoYXBlKVxuXHRcdEAuc2hhcGVzW1wiI3tvcHRpb25zLmlkfVwiXSA9IHNoYXBlXG5cblx0XHRyZXR1cm4gc2hhcGUiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuOS4xXG52YXIgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5leHBvcnRzLkxheWVyU1ZHID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKExheWVyU1ZHLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBMYXllclNWRyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLmFkZFNoYXBlID0gYmluZCh0aGlzLmFkZFNoYXBlLCB0aGlzKTtcbiAgICB0aGlzLnNoYXBlcyA9IHt9O1xuICAgIExheWVyU1ZHLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuaHRtbCA9IFwiPHN2ZyBpZD0nXCIgKyBvcHRpb25zLmlkICsgXCInIHdpZHRoPSdcIiArIHRoaXMud2lkdGggKyBcIicgaGVpZ2h0PSdcIiArIHRoaXMuaGVpZ2h0ICsgXCInPi88c3ZnPlwiO1xuICAgIHRoaXMuc3ZnID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiI1wiICsgb3B0aW9ucy5pZCk7XG4gIH1cblxuICBMYXllclNWRy5wcm90b3R5cGUuYWRkU2hhcGUgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbiwgc2hhcGUsIHZhbHVlO1xuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgc2hhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcIlwiICsgdHlwZSk7XG4gICAgZm9yIChvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgaWYgKCFoYXNQcm9wLmNhbGwob3B0aW9ucywgb3B0aW9uKSkgY29udGludWU7XG4gICAgICB2YWx1ZSA9IG9wdGlvbnNbb3B0aW9uXTtcbiAgICAgIHNoYXBlLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiXCIgKyBvcHRpb24sIFwiXCIgKyBvcHRpb25zW29wdGlvbl0pO1xuICAgIH1cbiAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChzaGFwZSk7XG4gICAgdGhpcy5zaGFwZXNbXCJcIiArIG9wdGlvbnMuaWRdID0gc2hhcGU7XG4gICAgcmV0dXJuIHNoYXBlO1xuICB9O1xuXG4gIHJldHVybiBMYXllclNWRztcblxufSkoTGF5ZXIpO1xuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
