$(document).ready(function () {
    // banner animate
    // End banner aniamte

    // window on scroll
        var gallery = $('.content-post').offset().top;
        var thumbnail1 = $('.content-wrap:first-child').offset().top;
        var thumbnail2 = $('.content-wrap:nth-child(2)').offset().top;

        // Thumbnail
        if (thumbnail1) {
            function loading(ms) {
                return new Promise(function (resolve) {
                    setTimeout(resolve, ms)
                });
            }
            loading(500)
            .then(function () {
                $('.content-wrap_col:first-child').addClass('from-left');
                return loading(500)
            })
            .then(function() {
                $('.content-wrap_col:nth-child(2)').addClass('from-right');
                return loading(500)
            })
        }   

        if (thumbnail2) {
            function loading(ms) {
                return new Promise(function (resolve) {
                    setTimeout(resolve, ms)
                });
            }
            loading(500)
            .then(function () {
                $('.content-wrap_col:nth-child(3)').addClass('from-left');
                return loading(500)
            })
            .then(function() {
                $('.content-wrap_col:nth-child(4)').addClass('from-right');
                return loading(500)
            })
        }
        // End animate Thumbnail

        // Gallery
        if (gallery) {
            function loading(ms) {
                return new Promise(function (resolve) {
                    setTimeout(resolve, ms)
                });
            }
            loading(500)
            .then(function () {
                $('.content-post_col:first-child').addClass('from-left');
                return loading(500)
            })
            .then(function() {
                $('.content-post_col:nth-child(2)').addClass('from-down');
                return loading(500)
            })
            .then(function() {
                $('.content-post_col:nth-child(3)').addClass('from-up');
                return loading(500)
            })
            .then(function() {
                $('.content-post_col:nth-child(4)').addClass('from-right');
                return loading(500)
            })
        }
        // End animate Gallery
    // End window on scroll
});