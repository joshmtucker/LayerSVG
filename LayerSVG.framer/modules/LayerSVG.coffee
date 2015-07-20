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

		if shapes isnt undefined
			for shape in shapes when shapes
				mask.appendChild(shape)

		defs = @.svg.getElementsByTagName("defs")[0]
		defs.appendChild(mask)
		@masks["#{options.id}"] = mask

	addToMask: (id, element, prevElement) ->
		if typeof(id) isnt "string"
			id = id.getAttributeNS(null, "id")
			mask = @.svg.getElementById("#{id}")
		else 
			id = @.svg.getElementById("#{id}")
			mask = id

		if !prevElement
			mask.appendChild(element)
		else
			mask.insertBefore(element, prevElement)

	mask: (element, id) ->
		if typeof(id) isnt "string"
			id = id.getAttributeNS(null, "id")

		element.setAttributeNS(null, "mask", "url(##{id})")
		