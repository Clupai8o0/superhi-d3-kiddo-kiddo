const formTag = document.querySelector("form");
const inputTag = formTag.querySelector("input");
const nameTag = d3.select("span.name");

function search(name = "") {
	nameTag.text(name);
}

search("Kendall")

formTag.addEventListener("submit", (event) => {
	console.log("Hello world");
	event.preventDefault();
	search(inputTag.value);
	inputTag.value = "";
});
