class exports.LayerSVG extends Layer 
	constructor: (options={}) ->
		
		super options

		@html = "<svg id='#{options.id}' width='#{@.width}' height='#{@.height}'><defs></defs></svg>"
		@svg = @.querySelector("##{options.id}")	

		@shapes = {}
		@masks = {}
		@clipPaths = {}

	addShape: (options={}) ->
		shape = document.createElementNS("http://www.w3.org/2000/svg", "#{options.shape}") 

		for own option, value of options
				if option isnt "shape"
					shape.setAttributeNS(null, "#{option}", "#{options[option]}")

		@svg.appendChild(shape)
		@shapes["#{options.id}"] = shape

		return shape

	addDef: (options={}) ->
		def = document.createElementNS("http://www.w3.org/2000/svg", "#{options.type}")
		def.setAttributeNS(null, "id", "#{options.id}")

		if def is "clipPath" or "mask"
			for shape in options.shapes
				if typeof(shape) is "string"
					shape = @.svg.getElementById("#{shape}")
				def.appendChild(shape)

		defs = @.svg.getElementsByTagName("defs")[0]
		defs.appendChild(def)

		if options.type is "clipPath" then @clipPaths["#{options.id}"] = def else @masks["#{options.id}"] = def

	addToMask: (shapes, mask, prevShape) ->
		if typeof(mask) is "string"
			mask = @.svg.getElementById("#{mask}")

		if !Array.isArray(shapes)
			shape = shapes
			if typeof(shape) is "string"
				shape = @.svg.getElementById("#{shape}")

			if !prevShape
				mask.appendChild(shape)
			else
				mask.insertBefore(shape, prevShape)

		else
			for shape in shapes
				if typeof(shape) is "string"
					shape = @.svg.getElementById("#{shape}")

				if !prevShape
					mask.appendChild(shape)
				else
					mask.insertBefore(shape, prevShape)

	mask: (shape, mask) ->
		if typeof(shape) is "string"
			shape = @.svg.getElementById("#{shape}")

		if typeof(mask) isnt "string"
			mask = mask.getAttributeNS(null, "id")

		shape.setAttributeNS(null, "mask", "url(##{mask})")