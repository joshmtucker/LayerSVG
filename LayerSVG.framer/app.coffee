{LayerSVG} = require "LayerSVG"

background = new BackgroundLayer

# Create SVG layer
SVG = new LayerSVG height: 200, width: 200, id: "square"

test = SVG.addShape "rect", x: 10, y: 20, width: 100, height: 100, id: "hello"

test2 = SVG.addShape "rect", x: 10, y: 20, width: 100, height: 100, id: "hello2"