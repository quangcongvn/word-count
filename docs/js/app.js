$(document).ready(function () {
   var converter = new showdown.Converter(),
    text      = "Steps:    1. create html page    2. Include code";
    html      = converter.makeHtml(text);
    $('#test').html(html);
}); // end ready