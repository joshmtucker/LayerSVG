class exports.LayerSVG extends Layer 
	constructor: (options={}) ->
		
		super options

		@.html = "<svg id='svg' width='#{@.width}' height='#{@.height}'>/<svg>"
		@.svg = @.querySelector("#svg")

	createShape: (type, options={}) =>
		shape = switch
			when type is "rect" 
				rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")
				rect.setAttributeNS(null, "x", "#{options.x}")
				rect.setAttributeNS(null, "y", "#{options.y}")
				rect.setAttributeNS(null, "width", "#{options.width}")
				rect.setAttributeNS(null, "height", "#{options.height}")

				@.svg.appendChild(rect)

			when type is "circle"
				circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
				circle.setAttributeNS(null, "cx", "#{options.x}")
				circle.setAttributeNS(null, "cy", "#{options.y}")
				circle.setAttributeNS(null, "r", "#{options.radius}")

				@.svg.appendChild(circle)

			when type is "ellipse"
				ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse")
				ellipse.setAttributeNS(null, "cx", "#{options.x}")
				ellipse.setAttributeNS(null, "cy", "#{options.y}")
				ellipse.setAttributeNS(null, "rx", "#{options.radiusHorizontal}")
				ellipse.setAttributeNS(null, "ry", "#{options.radiusVertical}")

				@.svg.appendChild(ellipse)

			when type is "line"
				line = document.createElementNS("http://www.w3.org/2000/svg", "line")
				line.setAttributeNS(null, "x1", "#{options.x}")
				line.setAttributeNS(null, "y1", "#{options.y}")
				line.setAttributeNS(null, "x2", "#{options.x2}")
				line.setAttributeNS(null, "y2", "#{options.y2}")
				line.setAttributeNS(null, "stroke", "black")

				@.svg.appendChild(line)

			when type is "polygon"
				polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon")
				polygon.setAttributeNS(null, "points", "#{options.points}")

				@.svg.appendChild(polygon)

			when type is "path"
				path = document.createElementNS("http://www.w3.org/2000/svg", "path")
				path.setAttributeNS(null, "d", "#{options.path}")

				@.svg.appendChild(path)

