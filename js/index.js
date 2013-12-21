$(function(){
  "use strict";

  var findTeams = function() {
    $("#spin").addClass("show");
    setTimeout(function(){
      $("#results ul").empty();
      $("#results ul").append($("#featured ul").html());
      $("#spin").removeClass("show").addClass("hide");
    }, 500);
  }

  $("#main-form input, #main-form select").change(findTeams);
});