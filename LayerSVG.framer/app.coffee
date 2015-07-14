{LayerSVG} = require "LayerSVG"

# Create SVG layer
svg = new LayerSVG height: 900, width: 900

# ––– Basic shapes
# Rectangle
rect = svg.createShape "rect", x: 10, y: 10, width: 100, height: 100

# Circle
circle = svg.createShape "circle", x: 100, y: 200, radius: 40

# Ellipse
ellipse = svg.createShape "ellipse", x: 200, y: 100, radiusHorizontal: 50, radiusVertical: 30

# Line
line = svg.createShape "line", x: 20, y: 350, x2: 300, y2: 350

# Polygon
polygon = svg.createShape "polygon", points: "200,10 250,190 160,210"

# <-- Add support for polyline

# Path
path = svg.createShape "path", path: "M450 0 L75 200 L225 200 Z"


