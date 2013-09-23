/* Copyright (c) 2013 Rodrigo Araujo (http://dygufa.com)
* Version: 0.1.1
*/

(function ($) { 
    $.fn.simpleCarousel = function(options) {    
        var settings = $.extend({
            number: 3,
            size: 150,
            minusArrow: '.sc-minus', // pull to left or top
            plusArrow: '.sc-plus', // pull to right or bottom
            container: '.sc-container',
            item: '.sc-item',
            axis: 'x',
            speed: 600
        }, options);

        var _this = this,
            transtionEnabled = false,
            amountElements = _this.find(settings.container).find(settings.item).length,
            page = 1,
            sign = null,
            marginDirection = (settings.axis == 'x') ? 'margin-left' : 'margin-top';

        function toggleArrow() {
            _this.find(settings.minusArrow).css({'cursor': ((page == 1) ? 'default' : 'cursor')}).animate({'opacity': ((page == 1) ? '0.7' : '1')}, 500);
            _this.find(settings.plusArrow).css({'cursor': (((settings.number*page)+1 > amountElements) ? 'default' : 'cursor')}).animate({'opacity': (((settings.number*page)+1 > amountElements) ? '0.7' : '1')}, 500);
        }

        toggleArrow();
       
        function pull(direction) {
            if (transtionEnabled) {
                return false;
            }
            transtionEnabled = true;

            if (direction == 'minus') {
                sign = '-=';
                page++;
            } else if (direction == 'plus') {
                sign = '+=';
                page--;
            } else {
                return false;
            }

            toggleArrow();

            _this.find(settings.container).animate({'margin-left': sign + (settings.size*settings.number) + 'px'}, settings.speed, function() {
                transtionEnabled = false;
            });
        }

        this.find(settings.minusArrow).click(function() {
            if (page == 1) {
                return false;
            }
            
            pull('plus');
        });

        this.find(settings.plusArrow).click(function() {
            if ((settings.number*page)+1 > amountElements) {
                return false;
            }
            
            pull('minus');
        }); 
    }; 
}(jQuery));