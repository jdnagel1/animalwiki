$(document).ready(function() {
  $("form#animal").submit(function(event) {
    var animalVar = $("select#animalButton").val();

    if (animalVar = 'Turtles') {
      $("#turtles").show();
    } 

    //      else if {
    //   $("#snakes").show();
    // } else {
    //   $("#insects").show();
    // }

    event.preventDefault();
  });
});
