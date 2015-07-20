{LayerSVG} = require "LayerSVG"

background = new BackgroundLayer backgroundColor: Framer.Defaults.Layer.backgroundColor

# Create SVG Layer

SVGLayer = new LayerSVG width: 200, height: 200, id: "SVGLayer", backgroundColor: "transparent"
SVGLayer.center()

# Add Shapes
square = SVGLayer.addShape
	shape: "rectangle"
	x: 0
	y: 0
	width: 200
	height: 200
	id: "square"
	fill: "red"
	
outerSquare = SVGLayer.addShape
	x: 0
	y: 0
	width: 200
	height: 200
	shape: "rectangle"
	id: "outerSquare"
	fill: "white"

innerCircle = SVGLayer.addShape
	shape: "circle"
	cx: square.getAttributeNS(null, "width")/2
	cy: square.getAttributeNS(null, "height")/2
	r: 40
	id: "innerCircle"
	fill: "white"
	
innerSquare = SVGLayer.addShape
	shape: "rectangle"
	x: 20
	y: 20
	width: 200 - 40
	height: 200 - 40
	id: "innerSquare"
	
circleMask = SVGLayer.addMask("circleMask", ["outerSquare", "innerSquare"])

SVGLayer.mask(square, circleMask)

SVGLayer.addToMask("innerCircle", circleMask)

print SVGLayer.html