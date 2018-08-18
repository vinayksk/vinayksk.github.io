$(document).ready(function () {
    nav = $('.navbar').height();
    final = $(window).height() - nav;
    $('.int').height(final);
})

function smoothScroll(destination) {
    nav = $('.navbar').height();
    header = $('.header').height();
    about = $('#about').height();
    experience = $('#experience').height();
    projects = $('#projects').height();
    var d = 0
    if (destination == "about"){
        console.log(destination)
        d = nav + header + 16;
        console.log(scroll)
    }
    if (destination == "experience"){
        console.log(destination)
        d = nav + header + about + 16;
        console.log(scroll)
    }
    if (destination == "projects"){
        console.log(destination)
        d = nav + header + about + experience + 16;
        console.log(scroll)
    }
    if (destination == "accolades"){
        console.log(destination)
        d = nav + header + about + experience + projects + 16;
        console.log(scroll)
    }
    window.scroll({
        top: d, 
        left: 0, 
        behavior: 'smooth' 
      });
    
}

function test(destination){
    document.querySelector(destination).scrollIntoView({
        behavior: 'smooth'
    });
}

