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

	addMask: (id, shape) ->
		mask = document.createElementNS("http://www.w3.org/2000/svg", "mask")
		mask.setAttributeNS(null, "id", "#{id}")

		if !Array.isArray(shape)
			if typeof(shape) is "string"
				shape = @.svg.getElementById("#{shape}")
				mask.appendChild(shape)
			else
				mask.appendChild(shape)
		else
			for element in shape 
				if typeof(element) is "string"
					element = @.svg.getElementById("#{element}")
					mask.appendChild(element)
				else
					mask.appendChild(element)

		defs = @.svg.getElementsByTagName("defs")[0]
		defs.appendChild(mask)
		@masks["#{id}"] = mask

	addToMask: (shape, mask, prevElement) ->
		if typeof(mask) is "string"
			mask = @.svg.getElementById("#{mask}")

		if !prevElement
			mask.appendChild(shape)
		else
			mask.insertBefore(shape, prevElement)

	mask: (element, id) ->
		if typeof(id) isnt "string"
			id = id.getAttributeNS(null, "id")

		element.setAttributeNS(null, "mask", "url(##{id})")
		