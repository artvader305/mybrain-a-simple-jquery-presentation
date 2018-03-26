$(document).ready(function() {
  $("h1").click(function(){
        $("h2").fadeOut()
    });
    $("h1").click(function(){
        $("h2").fadeIn();
    });
});
