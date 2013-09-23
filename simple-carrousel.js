/* Copyright (c) 2013 Rodrigo Araujo (http://dygufa.com)
* Version: 0.0.0
*/

(function ($) { 
    $.fn.simpleCarousel = function(options) {    
        var settings = $.extend({
            number: 3,
            width: 150,
            minusArrow: '.sc-minus',
            plusArrow: '.sc-plus',
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

            _this.find(settings.container).animate({'margin-left': sign + (settings.width*settings.number) + 'px'}, settings.speed, function() {
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