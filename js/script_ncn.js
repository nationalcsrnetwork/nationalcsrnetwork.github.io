$(document).ready(function() {
    
    

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.about-sec parallax').offset().top}, 1000); 
    });
    
   
});