{LayerSVG} = require "LayerSVG"

background = new BackgroundLayer

# Create SVG layer
circle = new LayerSVG height: 200, width: 200, name: "circle"

test = circle.addShape "rect", x: 10, y: 20, width: 100, height: 100, id: "hello"

test2 = circle.addShape "rect", x: 10, y: 20, width: 100, height: 100, id: "hello2"