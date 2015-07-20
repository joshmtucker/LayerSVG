class exports.LayerSVG extends Layer 
	constructor: (options={}) ->
		
		super options

		@shapes = {}
		@html = "<svg id='#{options.id}' width='#{@.width}' height='#{@.height}'>/<svg>"
		@element = @.querySelector("##{options.id}")	


	addShape: (type, options={}) =>
		shape = document.createElementNS("http://www.w3.org/2000/svg", "#{type}")
		for own option, value of options
			shape.setAttributeNS(null, "#{option}", "#{options[option]}")

		@element.appendChild(shape)
		@shapes["#{options.id}"] = shape

		return shape