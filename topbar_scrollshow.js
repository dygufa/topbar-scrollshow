/* Copyright (c) 2013 Rodrigo Araujo (http://dygufa.com)
* Version: 0.1.0
*/

(function ($) { 
    $.fn.topbarss = function(options) { 
        var settings = $.extend({
            trigger: document,
            distance: 100,
            effect_speed: 250
        }, options);

        var _this = this,
            visible = false;

        $(settings.trigger).scroll(function() {
            var top_distance = $(settings.trigger).scrollTop();
            if ((top_distance >= settings.distance && visible == false) || (top_distance < settings.distance && visible == true)) {
                visible = !visible;
                $(_this).fadeToggle(settings.effect_speed);
            } 
        });
    }; 
}(jQuery));