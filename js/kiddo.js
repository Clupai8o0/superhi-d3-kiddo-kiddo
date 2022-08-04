const formTag = document.querySelector("form");
const inputTag = formTag.querySelector("input");
const nameTag = d3.select("span.name");

function search(name = "") {
	let results = data.filter((d) => d.name.toLowerCase() === name.toLowerCase());
	if (results.length > 0) nameTag.text(name);
	else alert(`No results for ${name}`);
}

search("Kendall");

formTag.addEventListener("submit", (event) => {
	console.log("Hello world");
	event.preventDefault();
	search(inputTag.value);
	inputTag.value = "";
});
