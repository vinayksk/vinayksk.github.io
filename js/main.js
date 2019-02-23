$(document).ready(function () {
    nav = $('.navbar').height();
    final = $(window).height() - nav;
    $('.int').height(final);
})

$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});

$(document).bind("contextmenu",function(e) { 
	e.preventDefault();
 
});

function smoothScroll(destination) {
    nav = $('.navbar').height();
    header = $('.header').height();
    about = $('#about').height();
    experience = $('#experience').height();
    projects = $('#projects').height();
    var d = 0
    if (destination == "about"){
        console.log(destination)
        d = nav + header;
        console.log(scroll)
    }
    if (destination == "experience"){
        console.log(destination)
        d = nav + header + about;
        console.log(scroll)
    }
    if (destination == "projects"){
        console.log(destination)
        d = nav + header + about + experience;
        console.log(scroll)
    }
    if (destination == "accolades"){
        console.log(destination)
        d = nav + header + about + experience + projects;
        console.log(scroll)
    }
    window.scroll({
        top: d + 34, 
        left: 0, 
        behavior: 'smooth' 
      });
    
}

function test(destination){
    document.querySelector(destination).scrollIntoView({
        behavior: 'smooth'
    });
}

