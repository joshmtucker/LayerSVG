class exports.LayerSVG extends Layer 
	constructor: (options={}) ->

		@.shapes = {}
		
		super options

		@.html = "<svg id='#{options.id}' width='#{@.width}' height='#{@.height}'>/<svg>"
		@.svg = @.querySelector("##{options.id}")	


	addShape: (type, options={}) =>
		shape = document.createElementNS("http://www.w3.org/2000/svg", "#{type}")
		for own option, value of options
			shape.setAttributeNS(null, "#{option}", "#{options[option]}")

		@.svg.appendChild(shape)
		@.shapes["#{options.id}"] = shape

		return shape