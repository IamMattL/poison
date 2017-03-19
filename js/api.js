$(document).ready(function() {
    $.getJSON('http://192.168.252.66:60017/api/legit', function(data) {

        $('#legit-news li').remove();
        $.each(data, function(key, newsItem) {
            var title = newsItem.Title;
            var summary = newsItem.Summary;
            var url = newsItem.Url;
            var published = newsItem.Published;
            var score = newsItem.Score;
            $('#legit-news').append('<li>' + title + '</li>');
        });
    });

    $.getJSON('http://192.168.252.66:60017/api/fake', function(data) {

        $('#fake-news li').remove();
        $.each(data, function(key, newsItem) {
            var title = newsItem.Title;
            var summary = newsItem.Summary;
            var url = newsItem.Url;
            var published = newsItem.Published;
            var score = newsItem.Score;
            $('#fake-news').append('<li>' + title + '</li>');
        });
    });
});