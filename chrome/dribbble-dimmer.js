// add UI elements
$('body').prepend('<div id="dd-mask"></div>');
$('#single-img').append('<div id="dd-toggle"></div>');

// observe toggle mouseovers
$('#dd-toggle').hover(
  function(e) {
    $('#dd-mask').fadeIn('fast');
  },
  function(e) {
    $('#dd-mask').fadeOut('fast');
  }
);