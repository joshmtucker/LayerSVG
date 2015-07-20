{LayerSVG} = require "LayerSVG"

background = new BackgroundLayer

# Create SVG layer
SVG = new LayerSVG height: 200, width: 200, id: "square", backgroundColor: "transparent"

mask = SVG.addMask "strokeSquare"

square = SVG.addShape "rect",
	x: 10 
	y: 20 
	width: 100 
	height: 100 
	id: "square"

outer = SVG.addShape "rect", x: 10, y: 20, width: 100, height: 100, id: "outer", fill: "white"

inner = SVG.addShape "rect", x: 35, y: 45, width: 50, height: 50, id: "inner"

SVG.addToMask(outer, "strokeSquare")
SVG.addToMask(inner, "strokeSquare")

SVG.setMask(square, mask)