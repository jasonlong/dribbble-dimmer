// add UI elements
$('body').prepend('<div id="dd-mask"></div>');
$('#single-img').append('<span id="dd-toggle"></span>');

// observe toggle mouseovers
$('#dd-toggle').hover(
  function(e) {
    $('#dd-mask').fadeIn('fast');
  },
  function(e) {
    $('#dd-mask').fadeOut('fast');
  }
);