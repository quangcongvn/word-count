$(document).ready(function () {
   alert(1234);return;
   var converter = new showdown.Converter(),
    text      = '# hello, markdown!',
    html      = converter.makeHtml(text);
    $('#test').html(html);
}); // end ready