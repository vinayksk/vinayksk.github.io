$(document).ready(function () {
    // let nav = $('#navb').height();
    // let height = window.innerHeight;

    // console.log(nav)
    // console.log(height - nav)
    // $("#intro_row").css('margin-top', nav + 'px');

})

function smoothScroll(destination) {
    let nav = $('#navb').outerHeight(true);
    let intro = $('#intro').outerHeight(true);
    let about = $('#about').outerHeight(true);
    let exp = $('#experience').outerHeight(true);
    let proj = $('#projects').outerHeight(true);

    let d = 0;

    if (destination == "about") {
        d = nav + intro;
    }
    if (destination == "experience") {
        d = nav + intro + about;
    }
    if (destination == "projects") {
        d = nav + intro + about + exp;
    }
    if (destination == "accolades") {
        d = nav + intro + about + exp + proj;
    }
    window.scroll({
        top: d - nav, 
        left: 0, 
        behavior: 'smooth' 
      });
}

