$(document).ready(function () {
    var converter = new showdown.Converter();
    html = converter.makeHtml($('body').html());
    $('body').html(html);
}); // end ready