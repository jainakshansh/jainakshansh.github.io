window.onscroll = function() {scrollFn()};
window.onready = function() {scrollFn()};

function scrollFn() {
	if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
		document.getElementById("navhome").style.display = "flex";
		document.getElementById("navhome").classList.add("sticky");
	} else {
		document.getElementById("navhome").style.display = "none";
		document.getElementById("navhome").classList.remove("sticky");
	}
}