function on() {
  document.getElementById("loaderOverlay").style.display = "flex";
}

$(".loaderClassForBtn").click(function() {
  var count = $(('#count'));
  $({ Counter: 0 }).animate({ Counter: count.text() }, {
    duration: 18000,
    easing: 'linear',
    step: function () {
      count.text(Math.ceil(this.Counter)+ "%");
    }
  });

  var s = Snap('#animated');
  var progress = s.select('#progress');

  progress.attr({strokeDasharray: '0, 251.2'});
  Snap.animate(0,251.2, function( value ) {
      progress.attr({ 'stroke-dasharray':value+',251.2'});
  }, 15000);
});
