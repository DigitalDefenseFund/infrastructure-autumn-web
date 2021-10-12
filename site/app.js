let laserToggle = ()=> {
	document.body.onmousedown = ()=> {
		document.getElementById('swap').src = "images/laser-cat-on.png"
	}
	document.body.onmouseup = ()=> {
		document.getElementById('swap').src = "images/laser-cat-off.png";
	}
}

let appendText = ()=> {
	let p = document.createElement("P");
	let text = document.createTextNode("Click anywhere to shoot lasers!");
	p.appendChild(text);
	document.body.appendChild(p);
}

let laserInit = ()=> {
	appendText();
	laserToggle();
}

document.addEventListener("DOMContentLoaded",laserInit)