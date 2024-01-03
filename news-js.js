window.addEventListener('DOMContentLoaded', function() {
    var rowNews = document.querySelectorAll('.row-news');
    var columnNewsImg = document.querySelectorAll('.column-news-img');
    var columnNews = document.querySelectorAll('.column-news');

    function rearrangeColumns() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            for (var i = 0; i < rowNews.length; i++) {
                if (i % 2 === 1) {
                    rowNews[i].insertBefore(columnNewsImg[i], columnNews[i]);
                }
            }
        } else {
            for (var i = 0; i < rowNews.length; i++) {
                if (i % 2 === 1) {
                    rowNews[i].insertBefore(columnNews[i], columnNewsImg[i]);
                }
            }
        }
    }

    rearrangeColumns();

    window.addEventListener('resize', rearrangeColumns);
});