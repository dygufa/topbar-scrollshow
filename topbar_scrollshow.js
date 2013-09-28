/* Copyright (c) 2013 Rodrigo Araujo (http://dygufa.com)
* Version: 0.0.1
*/

(function ($) { 
    $.fn.topbarss = function(options) { 
        var settings = $.extend({
            trigger: document,
            distance: 100
        }, options);

        var _this = this,
            visible = false;

        $(settings.trigger).scroll(function() {
            var top_distance = $(settings.trigger).scrollTop();
            if ((top_distance >= settings.distance && visible == false) || (top_distance < settings.distance && visible == true)) {
                visible = !visible;
                $(_this).fadeToggle(250);
            } 
        });
    }; 
}(jQuery));