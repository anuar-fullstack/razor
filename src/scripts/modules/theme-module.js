AppName.Modules.ThemeModule = (function() {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  var _privateMethod = function() {
    // private stuff

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        1199: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 20
        }
        ,
        767: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    });
  };

  var _dropdown = function () {
    $('.btn-group.dropright .dropdown-item').hover(function() {
      $(this).next('.dropdown-menu').addClass('show')
  });
  
  $('.btn-group.dropright .dropdown-menu').mouseout(function(){
        $(this).removeClass('show');
  })
  }

  var _modalPic = function() {
    $( '.lightbox' ).each(function( index ) {
      $(this).click(function(){
          var imgSrc = $(this).children("img").attr("data-img");
          console.log(imgSrc);
          $('body').append( '<div id="lightbox-modal" class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog  modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><img src="' + imgSrc + '" class="img-responsive"></div></div></div></div>' );
          $('#lightbox-modal').modal({show:true});
    
          $('#lightbox-modal').on('hidden.bs.modal', function (e) {
            $(this).remove();
          })
          return false;
      });
    });
       
  }

  var _animation = function() {
    $(window).scroll( function(){
    
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},1500);
                  
          } 
      }); 
  });
  }

  var _close = function () {
    $('.closebtn').on('click', function() {
      $('#myNav').css('width','0%')
    })
    
    $('.burger-mobile').on('click', function () {
      $('#myNav').css('width', "100%")
    })

    $('.more-product').on('click',function(){
      $('.menu-product').css("display",'block');
     $('.menu-first').css('display','none');
    });

    $('.audio-item').on('click',function(){
      $('.menu-product').css("display",'none');
      $('.headset-product').css("display",'block');
    });

    $('.headset-audio').on('click',function(){
      $('.menu-product').css("display",'block');
      $('.headset-product').css("display",'none');
    });

    $('.back-menu-first').on('click',function(){
      $('.menu-product').css("display",'none');
      $('.menu-first').css('display','block');
    });
  }

  var _toggleBtn = function() {
    $('.swiper-slide').hover(function(){
      $(this).find('.view-btn').toggleClass('active');
    });}
  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function() {
    _privateMethod();
    _toggleBtn();
    _modalPic();
    _animation();
    _dropdown();
    _close();
  };

  return {
    init: init
  };
})();
