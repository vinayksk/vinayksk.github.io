$(window).scroll(function(){
    var pos = $(this).scrollTop();
	var height2 = window.innerHeight * 2  - 50;
	var height3 = window.innerHeight * 3 - 100;
	var height4 = window.innerHeight * 4 - 150;
	if(pos < window.innerHeight) {
        document.getElementById("header").innerHTML = "Welcome";
    }
    if(pos > window.innerHeight) {
        document.getElementById("header").innerHTML = "About Me";
    }
    if(pos > (height2)) {
        document.getElementById("header").innerHTML = "Experience";
    }
    if(pos > (height3)) {
        document.getElementById("header").innerHTML = "New text!";
    }
    if(pos > (height4)) {
        document.getElementById("header").innerHTML = "New text!";
    }
});