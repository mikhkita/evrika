$(document).ready(function(){	
    $(window).stellar({
        hideDistantElements: false,
        horizontalScrolling: false,
        positionProperty: 'transform'
    });
    
    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
    }
    $(window).resize(resize);
    resize();

    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
            });
        }
    }
    $.fn.placeholder();
    
    $('.slick-slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        fade: true,
        arrows: false,
        autoplaySpeed: 3000,
        draggable: false
    });

    $('.slick-slider2').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        arrows: false,
        autoplaySpeed: 3000,
        draggable: false
    });
    $('.slick-slider2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(this).find(".person-photo").fadeOut(200);
    });
    $('.slick-slider2').on('afterChange', function(event, slick, currentSlide){
        $(this).find(".person-photo").fadeIn();
    });

    var open,active,animate = true;
    $(".b-city-name").click(function(){
        if(!$(this).parent().hasClass("active")) {
            animate = false;
            var obj = $(this).parent();
            obj.addClass("active");
            obj.find(".b-cloud3").fadeIn(200,function(){
                obj.find(".b-cloud2").fadeIn(200,function(){
                    obj.find(".b-cloud-cont").fadeIn();
                    animate = true;
                });
            });
        }
        
    });
    
    function closeBubble(active){
        if( typeof active == "undefined" ) active = $(".b-city.active");
            active.removeClass('active');
            active.find('.b-cloud3').hide();
            active.find('.b-cloud2').hide();
            active.find('.b-cloud-cont').hide();
    }

        // $("body").on("mouseup",".b-city.active,.b-cloud",function(){
        //     open = true;
        // });

        $("body").on("mousedown",function() {
            open = false;
        }).bind("mouseup",function(){
            if( !open && animate)
                closeBubble();
        });
        customHandlers['question_hide'] = function() {
            $(".b-popup .b-popup-cont img").hide();
        };
        customHandlers['question_show'] = function() {
            $(".b-popup .b-popup-cont img").fadeIn();
        };
	// var myPlace = new google.maps.LatLng(55.754407, 37.625151);
 //    var myOptions = {
 //        zoom: 16,
 //        center: myPlace,
 //        mapTypeId: google.maps.MapTypeId.ROADMAP,
 //        disableDefaultUI: true,
 //        scrollwheel: false,
 //        zoomControl: true
 //    }
 //    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

 //    var marker = new google.maps.Marker({
	//     position: myPlace,
	//     map: map,
	//     title: "Ярмарка вакансий и стажировок"
	// });

    //  var options = {
    //     $AutoPlay: true,                                
    //     $SlideDuration: 500,                            

    //     $BulletNavigatorOptions: {                      
    //         $Class: $JssorBulletNavigator$,             
    //         $ChanceToShow: 2,                           
    //         $AutoCenter: 1,                            
    //         $Steps: 1,                                  
    //         $Lanes: 1,                                  
    //         $SpacingX: 10,                              
    //         $SpacingY: 10,                              
    //         $Orientation: 1                             
    //     }
    // };

    // var jssor_slider1 = new $JssorSlider$("slider1_container", options);

});