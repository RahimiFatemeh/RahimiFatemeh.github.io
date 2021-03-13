$(document).ready(function() {
    
    $(".js--feautures").waypoint(function(direction){
        if(direction == "down")
            {
                $("nav").addClass("sticky");
            }
        else
            {
                $("nav").removeClass("sticky");
            }},{
        offset: '20%'
    });
    

    /* Scroll on buttons */
    $(".js--scroll-to-plan").click(function(){
        $("html,body").animate({scrollTop: $('.js--plan').offset().top} , 1000);        
    });
    
    
     $(".js--scroll-to-features").click(function(){
        $("html,body").animate({scrollTop: $('.js--feautures').offset().top} , 1000);        
    });
    
    
    /* Navigation scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
     $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    /* Mobile navigation */
    $('.js--icon-nav').click(function(){
        
        $('.js--main-nav').slideToggle(200); 
        
        var icon = $('js--icon-nav i');
        
        if(icon.hasClass('ion-navicon-round'))
           {
               icon.addClass('ion-close-round');     
               icon.removeClass('ion-navicon-round');
           }
        else
           {              
               icon.addClass('ion-round-round');  
               icon.removeClass('ion-close-round');
           }
        
    });                    
    
});    
   