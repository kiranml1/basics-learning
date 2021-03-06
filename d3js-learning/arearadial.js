		var data = d3.range(120).map(function(i) {
		  return .8 + Math.sin(i / 3 * Math.PI) / 6;
		});

		var width = 960,
		    height = 500;

		var radius = d3.scale.linear()
		    .domain([0, 1])
		    .range([height / 3, height / 2]);

		var angle = d3.scale.linear()
		    .domain([0, data.length])
		    .range([0, 2 * Math.PI]);

		var line = d3.svg.line.radial()
		    .interpolate("basis-closed")
		    .radius(radius)
		    .angle(function(d, i) { return angle(i); });

		var area = d3.svg.area.radial()
		    .interpolate(line.interpolate())
		    .innerRadius(radius(0))
		    .outerRadius(line.radius())
		    .angle(line.angle());

		var svg = d3.select("#wrapper").append("svg")
		    .datum(data)
		    .attr("width", width)
		    .attr("height", height)
		  .append("g")
		    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		svg.append("path")
		    .attr("class", "area")
		    .attr("d", area)
		    .style('fill','red')
		    .style('stroke','black')
		    .style('stroke-width',2);