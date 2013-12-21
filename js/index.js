$(function(){
  "use strict";

  var findTeams = function() {
    $("#spin").addClass("show");
    setTimeout(function(){
      $("#results ul").empty();
      $("#results ul").append($("#featured ul").html());
      $("#spin").removeClass("show");
    }, 500);
  }

  $("#main-form input").keyup(findTeams);
  $("#main-form select").change(findTeams);
});