/* Anything here will be processed by the javascript interpreter when this file finishes loading. */


function handleScroll(passedElement) {
  var _passedElement = $(passedElement);
  if ( _passedElement ) {
    var offset = $(_passedElement).offset().top;
    $('html, body').animate({scrollTop: offset});
  }
}


$(document).ready(function(){
/* Anything here will run when the entire HTML document has been processed by the browser */



});
