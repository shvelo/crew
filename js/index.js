$(function(){
  "use strict";

  var findTeams = function() {
    $("#spin").addClass("show");
    setTimeout(function(){ $("#spin").removeClass("show").addClass("hide"); }, 500);
  }

  $("#main-form input, #main-form select").change(findTeams);
});