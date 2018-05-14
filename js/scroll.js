$(window).scroll(function(){

    var pos = $(this).scrollTop();
	var toolbar = document.getElementById("navb").clientHeight;
	var height2 = window.innerHeight * 2  - toolbar;
	var height3 = window.innerHeight * 4 + 30;
	var height4 = window.innerHeight * 5 + 405;
	var height5 = height4 + window.innerHeight + 10;
	if(pos < (window.innerHeight - toolbar)) {
        document.getElementById("header").innerHTML = "Welcome";
    }
    if(pos > (window.innerHeight - toolbar)) {
        document.getElementById("header").innerHTML = "About Me";
    }
    if(pos > (height2)) {
        document.getElementById("header").innerHTML = "Experience";
    }
    if(pos > (height3)) {
        document.getElementById("header").innerHTML = "Projects";
    }
    if(pos > (height4)) {
        document.getElementById("header").innerHTML = "Accolades";
    }
	if(pos > (height5)) {
        document.getElementById("header").innerHTML = "Contact Me";
    }
});
