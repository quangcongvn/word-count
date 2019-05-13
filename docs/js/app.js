$(document).ready(function () {
   var converter = new showdown.Converter(),
    text      = '# hello, markdown!',
    html      = converter.makeHtml(text);
    $('#test').html(html);
}); // end ready