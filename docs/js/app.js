$(document).ready(function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://wordcount-b6bd.restdb.io/rest/words",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "5cd9396bd195ac1a818b86b8",
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}); // end ready