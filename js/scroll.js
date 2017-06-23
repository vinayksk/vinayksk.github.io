$(window).scroll(function(){

    var pos = $(this).scrollTop();
	var toolbar = document.getElementById("navb").clientHeight;
	var height2 = window.innerHeight * 2  - toolbar;
	var height3 = window.innerHeight * 3 + 7;
	var height4 = window.innerHeight * 4 - 120;
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
        document.getElementById("header").innerHTML = "New text!";
    }
});
