// add class
$(".menu_inner i").click(function(){
    $(".menu_input").toggleClass("menu_icon")
  })



//   slick
$('.banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay:true,
    nextArrow: ".next",
    prevArrow: ".prev",
  });



  // type js
  $(function(){
    $(".typed").typed({
      strings: ["<span>Alamin</span>", "<b>Designer</b>", "Developer.",],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 30,
      // time before typing starts
      startDelay: 1200,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      loopCount: 5,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
    });
  });



  // mixitup js
  var mixer = mixitup('.fearture_mixi');
     
  



  //  lst slick
$('.lst_slick').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 1000,
  autoplay:true,
  nextArrow: ".nextl",
  prevArrow: ".prevl",
});





// bottom js
$(function() {  
  $('.btn-6')
    .on('mouseenter', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});





// lightbox js
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})




// kursor js
new kursor({
  type: 1
})




//  preloader
$(window).load(function(){
  $("#preloader").delay(1000).fadeOut(500)
})




// scroll
 if(scrolling > 50){
  $("#nav").addclass("menu_nav")
 }