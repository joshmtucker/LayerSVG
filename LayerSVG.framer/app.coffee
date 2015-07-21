{LayerSVG} = require "LayerSVG"

background = new BackgroundLayer backgroundColor: "#444444"

# IMPORTANT: Give all your elements id values

# Create an SVG Layer
# A LayerSVG serves as a container for
# elements such as shapes and masks

instagramIcon = new LayerSVG width: 400, height: 400, id: "instagramIcon"
instagramIcon.center()

# Create shapes
# Property values below are as defined for SVG shapes
# You can add any property you want as long as it matches standard SVG attributes
# Property "shape" is an added property to specify the shape type on creating the SVG element

icon = instagramIcon.addShape
	shape: "rect"
	x: 100
	y: 100
	rx: 18
	ry: 18
	width: instagramIcon.width/2
	height: instagramIcon.height/2
	fill: "white"
	id: "icon"
	
iconMask = instagramIcon.addShape
	shape: "rect"
	x: 100
	y: 100
	rx: 18
	ry: 18
	width: instagramIcon.width/2
	height: instagramIcon.height/2
	fill: "white"
	id: "iconMask"
	
innerLense = instagramIcon.addShape
	shape: "circle"
	cx: instagramIcon.width/2
	cy: instagramIcon.height/2
	r: 45
	fill: "white"
	id: "innerLense"
	
lenseMask = instagramIcon.addDef
	type: "mask"
	shapes: [iconMask, innerLense]
	id: "lenseMask"
	
# Add mask
# First property is the id of the mask you are creating
# You can pass in one shape for this mask or an array of shapes. Note that I can reference a shape either by a local reference or the ID set
# Order of shapes in the array is important with multiple
# NOTE: the fill color of a shape that is inside a mask is important. White = anything inside that shape stays, Black = goes away with mask

###

# Apply mask
instagramIcon.mask("icon", "lenseMask")

# addToMask
# Add shapes later into an existing mask
# Work-in-progress

outerLense = instagramIcon.addShape
	shape: "circle"
	cx: instagramIcon.width/2
	cy: instagramIcon.height/2
	r: 60
	id: "outerLense"
	
instagramIcon.addToMask(outerLense, "lenseMask", innerLense)

###

	
