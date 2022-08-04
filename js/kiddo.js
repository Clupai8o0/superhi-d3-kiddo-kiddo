const formTag = document.querySelector("form");
const inputTag = formTag.querySelector("input");
const nameTag = d3.select("span.name");

const svg = d3.select("svg");
svg.attr("width", 960).attr("height", 540);

const pathsGroup = svg.append("g").attr("class", "paths");

const rankScale = d3.scaleLinear().domain([1, 1000]).range([20, 500]);
const dateScale = d3.scaleLinear().domain([1880, 2010]).range([80, 915]);

const line = d3
	.line()
	.x((_, i) => dateScale(1880 + 10 * i))
	.y((d) => rankScale(d));

function search(name = "") {
	let results = data.filter((d) => d.name.toLowerCase() === name.toLowerCase());
	if (results.length > 0) {
		nameTag.text(name);

		const lines = pathsGroup.selectAll("path").data(results, (d) => d.name);
		lines
			.enter()
			.append("path")
			.attr("d", (d) => line(d.rank));
	} else alert(`No results for ${name}`);
}

search("Kendall");

formTag.addEventListener("submit", (event) => {
	console.log("Hello world");
	event.preventDefault();
	search(inputTag.value);
	inputTag.value = "";
});
