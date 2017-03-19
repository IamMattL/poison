$(document).ready(function() {
    $.getJSON('http://192.168.252.66:60017/api/legit', function(data) {

        $.each(data, function(key, newsItem) {
            var title = newsItem.Title;
            var summary = newsItem.Summary;
            var url = newsItem.Url;
            var published = newsItem.Published.substring(0,10);
            var score = newsItem.Score;
            $('#legit-news').append('<article><a href="' + url + '"><img src="images/placeholder.png" alt="' + title + '" /></a><div class="content"><a href="' + url + '"><h3><img src="images/testtube-empty.svg">' + title + '</h3></a><p>' + summary + '</p><small>Published: ' + published + '</small></div></article>');
        });
    });

    $.getJSON('http://192.168.252.66:60017/api/fake', function(data) {

        $.each(data, function(key, newsItem) {
            var title = newsItem.Title;
            var summary = newsItem.Summary;
            var url = newsItem.Url;
            var published = newsItem.Published.substring(0,10);
            var score = newsItem.Score;
            $('#fake-news').append('<article><a href="' + url + '"><img src="images/placeholder.png" alt="' + title + '" /></a><div class="content"><a href="' + url + '"><h3><img src="images/testtube-full.svg">' + title + '</h3></a><p>' + summary + '</p><small>Published: ' + published + '</small></div></article>');
        });
    });
});