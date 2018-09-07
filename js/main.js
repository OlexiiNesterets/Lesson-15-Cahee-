'use strict';

(function ($) {

    var $window = $(window);
    var $nav = $('.nav');
    var $button = $('.menu__button');
    var $buttonWrapper = $('.menu__button-wrapper');


    if ($window.width() < 1024) {
        $nav.addClass('hidden');
    } else {
        $buttonWrapper.addClass('hidden');
    }

    $window.resize(function () {
        if ($window.width() < 1024 && $buttonWrapper.hasClass('hidden')) {
            $nav.addClass('hidden');
            $buttonWrapper.removeClass('hidden');
            $button.text('<');
        } else if ($window.width() >= 1024) {
            $nav.removeClass('hidden');
            $buttonWrapper.addClass('hidden');
        }
    });

    $button.click(function(){
        $nav.toggleClass('hidden');
        if ($button.text() === '<') {
            $button.text('v');
        } else {
            $button.text('<');
        }
    });

})(jQuery);