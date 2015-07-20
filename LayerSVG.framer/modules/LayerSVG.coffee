class exports.LayerSVG extends Layer 
	constructor: (options={}) ->
		
		super options

		@shapes = {}
		@masks = {}
		@html = "<svg id='#{options.id}' width='#{@.width}' height='#{@.height}'><defs></defs></svg>"
		@svg = @.querySelector("##{options.id}")	


	addShape: (type, options={}) ->
		shape = document.createElementNS("http://www.w3.org/2000/svg", "#{type}")
		for own option, value of options
			shape.setAttributeNS(null, "#{option}", "#{options[option]}")

		@svg.appendChild(shape)
		@shapes["#{options.id}"] = shape

		return shape

	addMask: (id) ->
		mask = document.createElementNS("http://www.w3.org/2000/svg", "mask")
		mask.setAttributeNS(null, "id", "#{id}")

		defs = @.svg.getElementsByTagName("defs")[0]
		defs.appendChild(mask)

	addToMask: (element, id) ->
		mask = @.svg.getElementById("#{id}")
		mask.appendChild(element)

	setMask: (element, id) ->
		if typeof(id) isnt "string"
			id = id.getAttributeNS(null, "id")

		element.setAttributeNS(null, "mask", "url(##{id})")
		