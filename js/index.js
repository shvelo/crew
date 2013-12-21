$(function(){
  "use strict";

  var findTeams = function() {
    $("#spin").addClass("show");
    setTimeout(function(){
      $("#results .teams").empty();
      $("#results .teams").append($("#featured .teams").html());
      $("#spin").removeClass("show");
    }, 500);
  }

  $("#main-form input").keyup(findTeams);
  $("#main-form select").change(findTeams);
});