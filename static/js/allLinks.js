/**
 * Update all links to open in new window, if they are to external pages
 */
jQuery(document).ready(function($) {
    $('.section a:not(.share), .sectionContent a:not(.share)').on('click', function(event) {
        if ($(this).attr('target') == '_blank') {
            return;
        }
        var myURL = php_vars.baseURL.replace(/(^\w+:|^)\/\//, '');
	    event.stopPropagation();
        if (
            $(this).attr('href').substring(0, 5) == 'http:' ||
            $(this).attr('href').substring(0, 6) == 'https:'
        ) {
            if ($(this).attr('href').indexOf(myURL) >= 0) {
                location.href = $(this).attr('href');
            } else {
                window.open($(this).attr('href'));
            }
        } else {
            location.href = $(this).attr('href');
        }

        return false;
    });

//    $('a[href^="#"]').click(function () {
//        console.log($(this).attr('href'));
//        console.log($($(this).attr('href')).offset().top);
//        var minus = $('.nav-main-menu').height();
//        if ($('#wpadminbar').length) {
//            minus += $('#wpadminbar').height();
//        }
//        console.log(minus);
//        $([document.documentElement, document.body]).animate({
//            scrollTop: $($(this).attr('href')).offset().top - minus
//        }, 1000);
//    });
});
