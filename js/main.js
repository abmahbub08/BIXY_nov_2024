$(document).ready(function() {
    const $slider = $('.bx-slider-wrapper');
    const $sliderItems = $('.bx-slider-item');
    const itemWidth = $('.bx-slider-item').outerWidth(true);
    const totalItems = $sliderItems.length;


    // ==== Slider width 
    var marginAll = totalItems * 24;
    var slider_width = ((totalItems * 260) + 300) + marginAll;
    $slider.width(slider_width);


    // Function to update the active item and the transform property
    function prevSlider() {
        $('.prev').addClass('disable-click');

        setTimeout(function(){
            $('.bx-slider-wrapper .bx-slider-item:nth-child(3)').addClass('active');
            $('.bx-slider-wrapper .bx-slider-item:nth-child(2)').removeClass('active');
            $slider.animate({ 
                'margin-left': '-560px' 
            }, 500, 'swing',prev);
        },100);


        function prev() {
            // After the animation, move the first element to the last
            $('.bx-slider-item:first').appendTo('.bx-slider-wrapper');
            // Reset the margin without animation to create a seamless loop
            $slider.css('margin-left', '-280px');
            isAnimating = false;
        }

        setTimeout(function(){
            $('.prev').removeClass('disable-click');
        },600);
        
    }

    // Function to update the active item and the transform property
    function nextSlider() {
        $('.next').addClass('disable-click');

        setTimeout(function(){
            $('.bx-slider-wrapper .bx-slider-item:nth-child(1)').addClass('active');
            $('.bx-slider-wrapper .bx-slider-item:nth-child(2)').removeClass('active');
            $slider.animate({ 
                'margin-left': '0px' 
            }, 500, 'swing',next);
        },100);
        

        function next() {
            // After the animation, move the first element to the last
            $('.bx-slider-item:last').prependTo('.bx-slider-wrapper');
            // Reset the margin without animation to create a seamless loop
            $slider.css('margin-left', '-280px');
            isAnimating = false;
        }

        setTimeout(function(){
            $('.next').removeClass('disable-click');
        },600);
    }


    // Auto-slide feature
    var autoSld = setInterval(prevSlider, 3000);

    $(".prev").click(function(){
        clearInterval(autoSld);
        prevSlider();
    });
    $(".next").click(function(){
        clearInterval(autoSld);
        nextSlider();
    });




    //   ======= Tab section ======
    var tab_index = 1;
    var tab_count = $('.tab-item').length;

    function tabSlider() {
        $('.tab-c').removeClass('active');

        if (tab_count > (tab_index-1)) {
            var tab_class = '.tab-item.tab-' + tab_index + '';
            var tab_content = '.tab-content-' + tab_index + '';

            $(tab_class).addClass('active');
            $(tab_class + ' img').attr('src','images/stories/tab_'+tab_index+'_a.svg');
            $(tab_content).addClass('active');
            tab_index++;
        }
        else {
            $('.tab-item').removeClass('active');
            $('.tab-c').removeClass('active');
            for(var i = 0; i<tab_count; i++) {
                let t_in = '.tab-item.tab-' + (i +1) + '';
                $(t_in + ' img').attr('src','images/stories/tab_'+(i + 1)+'.svg');
            }
            
            tab_index = 1;
            setTimeout(function(){
                var tab_class = '.tab-item.tab-' + tab_index + '';
                var tab_content = '.tab-content-' + tab_index + '';

                $(tab_class).addClass('active');
                $(tab_class + ' img').attr('src','images/stories/tab_'+tab_index+'_a.svg');
                $(tab_content).addClass('active');
                tab_index++;
            },100)
        }
    }

    tabSlider();
    setInterval(tabSlider, 5000);


    // =================== Interactive Ads ================
    var interactive_ad = $(".bx-special-questions");
    var interactive_ad_length = interactive_ad.length;
    var ad_index = 1;

    function interactveAds() {
        interactive_ad.removeClass('active');
        $('.bx-animation-box').removeClass('active');
        if (ad_index <=  interactive_ad_length) 
        {
            $(".bx-special-questions:nth-child(" + ad_index + ")").addClass('active');
            $(".bx-animation-box:nth-child(" + ad_index + ")").addClass('active');
            ad_index++;
        }
        else
        {
            ad_index = 1;
            $(".bx-special-questions:nth-child(" + ad_index + ")").addClass('active');
            $(".bx-animation-box:nth-child(" + ad_index + ")").addClass('active');
            ad_index++;
        }
    }
    
    interactveAds();
    setInterval(interactveAds, 14000);

  });


