console.log("loaded");
var callback = function() {
	document.body.onmousedown = function() {
		console.log("down");
		document.getElementById('swap').src = "laser-cat-on.png";
	}
	document.body.onmouseup = function() {
		console.log("up");
		document.getElementById('swap').src = "laser-cat-off.png";
	}
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) { callback();
} else {
	document.addEventListener("DOMContentLoaded", callback);
};