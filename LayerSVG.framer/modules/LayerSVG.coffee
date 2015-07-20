class exports.LayerSVG extends Layer 
	constructor: (options={}) ->
		
		super options

		@shapes = {}
		@masks = {}
		@html = "<svg id='#{options.id}' width='#{@.width}' height='#{@.height}'><defs></defs></svg>"
		@svg = @.querySelector("##{options.id}")	


	addShape: (options={}) ->

		if options.shape is "rectangle"
			options.shape = "rect"

		shape = document.createElementNS("http://www.w3.org/2000/svg", "#{options.shape}") 

		for own option, value of options
			if option isnt "shape"
				shape.setAttributeNS(null, "#{option}", "#{options[option]}")

		@svg.appendChild(shape)
		@shapes["#{options.id}"] = shape

		return shape

	addMask: (id, shapes) ->
		mask = document.createElementNS("http://www.w3.org/2000/svg", "mask")
		mask.setAttributeNS(null, "id", "#{id}")

		if !Array.isArray(shapes)
			shape = shapes
			if typeof(shape) is "string"
				shape = @.svg.getElementById("#{shape}")
				mask.appendChild(shape)
			else
				mask.appendChild(shape)
		else
			for shape in shapes 
				if typeof(shape) is "string"
					shape = @.svg.getElementById("#{shape}")
					mask.appendChild(shape)
				else
					mask.appendChild(shape)

		defs = @.svg.getElementsByTagName("defs")[0]
		defs.appendChild(mask)
		@masks["#{id}"] = mask

	addToMask: (shapes, mask, prevShape) ->
		if !Array.isArray(shapes)
			shape = shapes
			if typeof(shape) is "string"
				shape = @.svg.getElementById("#{shape}")

			_insertBefore(shape, mask, prevShape)
		else
			for shape in shapes
				print shape
				if typeof(shape) is "string"
					shape = @.svg.getElementById("#{element}")

				_insertBefore(shape, mask, prevShape)

	mask: (shape, mask) ->
		if typeof(mask) isnt "string"
			mask = mask.getAttributeNS(null, "id")

		shape.setAttributeNS(null, "mask", "url(##{mask})")

	_insertBefore = (shape, mask, prevShape) ->
		if !prevShape
			mask.appendChild(shape)
		else 
			if typeof(prevShape) is "string"
				prevShape = @.svg.getElementById("#{prevShape}")

			mask.insertBefore(shape, prevShape)
		