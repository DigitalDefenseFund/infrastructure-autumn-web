var callback = function() {
	document.body.onmousedown = function() {
		document.getElementById('swap').src = "images/laser-cat-on.png";
	}
	document.body.onmouseup = function() {
		document.getElementById('swap').src = "images/laser-cat-off.png";
	}
	var p = document.createElement("P");
	var text = document.createTextNode("Click anywhere to shoot lasers!");
	p.appendChild(text);
	document.body.appendChild(p);
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) { callback();
} else {
	document.addEventListener("DOMContentLoaded", callback);
};