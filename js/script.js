// <section class="video">
//       <div class="container">
//         <div class="row">
//           <div class="col-md-12">
//             <div class="video_title text-center">
//               <h1>MAKE AMAZING WEBSITE</h1>
//               <p>Watch Our Tutorials</p>
//             </div>
//             <div class="video_section">
//                <div class="video_img text-center">
//               <img src="images/video_img.jpg" class="img-fluid " alt="video_background" >
//               <div class="img_overlay"></div>             
//             </div>
//             <div class="play_btn text-center">
//                 <a href="#video_story" id="video_link">
//                   <img src="images/play.png" class="img-fluid" alt=""></a>
               
//              </div>

//              <div class="mfp-hide" id="video_story" >
//                   <iframe width="800px" height="415" src="https://www.youtube.com/embed/45eWEO0gRHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                 </div> 
//             </div>
           
            
//           </div>
//         </div>
//       </div>
//     </section>

new WOW().init();

$(window).ready(function(){
  // preloader
    $.fakeLoader({
                    bgColor: '#2ecc71',
                    spinner:"spinner1"
                });
  });



$(document).ready(function(){
	 


   



//Update Header Style and Scroll to Top
   
   $(window).scroll(function(){
      if($(this).scrollTop() > 100){
        $('#scrolltop').fadeIn();
      }else{
        $('#scrolltop').fadeOut();
      }
   });

   $('#scrolltop').click(function(){
      $('html,body').animate({
        scrollTop:0
      },1000);
   });





  // Sticky Header
   $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 245) {
    $(".sticky").removeClass("scroll-header");
   }else{
    $(".sticky").addClass("scroll-header");
   }
  });



	// magnific popup
	 $('#videolink').magnificPopup({
 		 type: 'inline',
 		 midClick: true
  // other options
});



	 // isotope Filter
	 // init Isotope
var $grid = $('.grid').isotope({
   
});
// filter items on button click
$('.filter').on( 'click', 'span', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// active
$('.filter').on( 'click', 'span', function() {
   $(this).addClass('active').siblings().removeClass('active');
});



  // Magnigic popup lightbox
   $('.pop_img').magnificPopup({
     type:'image',
     gallery: {
    // options for gallery
    enabled: true
  }
      
  // other options
});






	 // owl-carousel for team section

	  $('.team_member').owlCarousel({
    loop:true,
    margin:15,

    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        576:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:false,
             
        }
    }
});



	  // Parallax Js start
	  //$('.con_bag').parallax({imageSrc: '../images/slider-bg.jpg'});


	  // owl-carousel for Client section

	  $('.client_img').owlCarousel({
    loop:true,
     

    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:false
        },
        576:{
            items:4,
            nav:false
        },
        1000:{
            items:6,
            nav:false,
             
        }
    }
});



	  // responsive-Tabs
	  $('#responsiveTabsDemo').responsiveTabs({
     startCollapsed: 'accordion',
    animation: 'slide'
});
 // active
    $('.service_tabs').on( 'click', 'li', function() {
   $(this).addClass('active').siblings().removeClass('active');
});

	  

	  // Counter Plugin
	  $(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});



	  // progress bar
	  $('#bar1').barfiller({
 
  // color of bar
  barColor:'#FF517B',
 
  // shows a tooltip
  tooltip:true,
 
  // duration in ms
  duration: 1000,
 
  // re-animate on resize
  animateOnResize:true,
 
  // custom symbol
  symbol:"%"
   
});

$('#bar2').barfiller({
 
  // color of bar
  barColor:'#FF517B',
 
  // shows a tooltip
  tooltip:true,
 
  // duration in ms
  duration: 1000,
 
  // re-animate on resize
  animateOnResize:true,
 
  // custom symbol
  symbol:"%"
   
});
$('#bar3').barfiller({
 
  // color of bar
  barColor:'#FF517B',
 
  // shows a tooltip
  tooltip:true,
 
  // duration in ms
  duration: 1000,
 
  // re-animate on resize
  animateOnResize:true,
 
  // custom symbol
  symbol:"%"
   
});
$('#bar4').barfiller({
 
  // color of bar
  barColor:'#FF517B',
 
  // shows a tooltip
  tooltip:true,
 
  // duration in ms
  duration: 1000,
 
  // re-animate on resize
  animateOnResize:true,
 
  // custom symbol
  symbol:"%"
   
});








 





});





// if ( $insight.scroll_top_enable != 1 ) {
//     return;
//   }
//   var $scrollUp = $( '#page-scroll-up' );
//   var lastScrollTop = 0;
//   var autoHide;

//   $window.scroll( function() {
//     clearTimeout( autoHide );

//     var st = $( this ).scrollTop();
//     if ( st > lastScrollTop ) {
//       $scrollUp.removeClass( 'show' );
//     } else {
//       if ( $window.scrollTop() > 200 ) {
//         $scrollUp.addClass( 'show' );

//         autoHide = setTimeout( function() {
//           $scrollUp.removeClass( 'show' );
//         }, 6000 );
//       } else {
//         $scrollUp.removeClass( 'show' );
//       }
//     }
//     lastScrollTop = st;
//   } );

//   $scrollUp.on( 'click', function( evt ) {
//     $( 'html, body' ).animate( {scrollTop: 0}, 600 );
//     evt.preventDefault();
//   } );
//   