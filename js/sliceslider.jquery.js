/*
 * sliceslider.jquery.js v1.0.0
 * http://themeforest.net/user/unionagency
 *
 * Copyright 2016, UnionAgency
 * http://themeforest.net/user/unionagency
 */

String.prototype.times = function(n) {
    return Array.prototype.join.call({length: n+1}, this);
};

(function($) {
 
    $.fn.sliceSlider = function(options) {       
        var settings = {  
            speed : '500',
            easing : 'cubic-bezier(0.8, 0, 0.2, 1)'
        };

        if(options) {
            $.extend(settings, options);
        }

        return this.each(function() {   

			var $this = $(this),
				$rightColumn = $this.find('.slice-slider-right-column'),
				$rightWrapper = $this.find('.slice-slider-right-column .slice-slider-wrapper'),
				$rightSlide = $this.find('.slice-slider-right-column .slice-slider-slide'),
				$length = $rightSlide.length,
				$settings = settings,
				mousewheelFinish = 0,
				$leftColumnContent = "";

			$rightSlide.each(function(){
				$leftColumnContent = '<div class="slice-slider-slide">'+$(this).html()+'</div>' + $leftColumnContent;
			});
			$('<div class="slice-slider-left-column"><div class="slice-slider-wrapper">'+$leftColumnContent+'</div></div>').insertBefore($rightColumn);
			if($length>1) $this.append('<div class="pagination"><div class="point active"></div>'+'<div class="point"></div>'.times($length-1)+'</div>');

			var $leftColumn = $this.find('.slice-slider-left-column'),
				$leftWrapper = $this.find('.slice-slider-left-column .slice-slider-wrapper'),
				$leftSlide = $this.find('.slice-slider-left-column .slice-slider-slide');

			$leftSlide.filter(':last').addClass('active').prevAll().addClass('prev');
			$rightSlide.filter(':first').addClass('active').nextAll().addClass('next');

			$this.find('.slice-slider-wrapper, .slice-align-animation').css({'transition':'all '+$settings.speed+'ms '+$settings.easing, '-webkit-transition':'all '+$settings.speed+'ms '+$settings.easing});

			function init(){
				setActiveSlice($leftWrapper, $leftSlide.filter('.active').index());
				setActiveSlice($rightWrapper, $rightSlide.filter('.active').index());
			}

			function setActiveSlice(foo, index){
				foo.css({'top':$this.height()*(-1)*index});
			}

			init();
			$('.rotate').css({'width':$('.rotate:visible').parent().height()});

			$this.on('mousewheel', function(event) {
				if(!mousewheelFinish && !$('body').hasClass('min-height')){
					mousewheelFinish = 1;
					setTimeout(function(){mousewheelFinish = 0;}, $settings.speed);
				    if(event.deltaY>0) {
				    	$leftSlide.filter('.active:not(:last-child)').removeClass('active prev next').addClass('prev').next().removeClass('prev next').addClass('active');
				    	$rightSlide.filter('.active:not(:first-child)').removeClass('active prev next').addClass('next').prev().removeClass('prev next').addClass('active');
				    	$this.find('.pagination .point.active:not(:first-child)').removeClass('active').prev().addClass('active');
				    }
				    else {
				    	$leftSlide.filter('.active:not(:first-child)').removeClass('active prev next').addClass('next').prev().removeClass('prev next').addClass('active');
				    	$rightSlide.filter('.active:not(:last-child)').removeClass('active prev next').addClass('prev').next().removeClass('prev next').addClass('active');
				    	$this.find('.pagination .point.active:not(:last-child)').removeClass('active').next().addClass('active');
				    }
				    init();
				}
			});

			$this.find('.pagination .point').on('click', function(){
				$(this).parent().find('.active').removeClass('active');
				$(this).addClass('active');
				var index = $this.find('.pagination .point').filter('.active').index(),
					activeSlideLeft = $leftSlide.eq($length-1-index),
					activeSlideRight = $rightSlide.eq(index);

				$leftSlide.removeClass('active prev next');
				$rightSlide.removeClass('active prev next');

				activeSlideLeft.addClass('active').prevAll().addClass('prev');
				activeSlideLeft.nextAll().addClass('next');

				activeSlideRight.addClass('active').prevAll().addClass('prev');
				activeSlideRight.nextAll().addClass('next');

				init();
			});

			//deffered resize function for efficient resize call function
			function debounce(func, wait, immediate) {
				var timeout;
				return function() {
					var context = this, args = arguments;
					var later = function() {
						timeout = null;
						if (!immediate) func.apply(context, args);
					};
					var callNow = immediate && !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
					if (callNow) func.apply(context, args);
				};
			}

			var myEfficientResizeFn = debounce(function() {
				init();
			}, 300);
			window.addEventListener('resize', myEfficientResizeFn);


        });
     
    };
     
})(jQuery);