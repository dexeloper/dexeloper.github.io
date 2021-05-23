$(document).ready(function() {
  $('#nav-talk-to-us').bind('click', false);
});

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}
$("#email-warning").hide();
$("#id-work-email").blur(function(){
  var email = $('#id-work-email').val();
  if(IsEmail(email)==true){
    $("#email-warning").hide();
    $("#id-work-email").removeClass('emailInputError');
  }
});
$("#id-work-email").focus(function(){
  $("#email-warning").hide();
  $("#id-work-email").removeClass('emailInputError');
});
$("#tt-form-submit").click(function(){

  var email = $('#id-work-email').val();
  if(IsEmail(email)==false){
    $("#ttForm").submit(function(e){
      $("#email-warning").show();
      $("#id-work-email").addClass('emailInputError');
      e.preventDefault();
    });
  }

  if($("#id-first-name").val() !="" && $("#id-last-name").val() !="" && $("#id-work-email").val() !="" && IsEmail(email)==true) {
    $(this).prop('disabled', true);
    $(this).addClass('submission-processing');
    $("#email-warning").hide();
    $("#id-work-email").removeClass('emailInputError');
    $("#tt-form-submit").text(($("#tt-form-submit").text() == 'Send Message') ? 'Processing...' : 'Send Message');
  }
});
