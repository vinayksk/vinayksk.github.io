$(document).ready(function(){
    console.log($(window).height());
    nav = $('.navbar').height();
    final = $(window).height() - nav;
    console.log(final);
    $('.int').height(final);
    console.log($('.int').height());
   })