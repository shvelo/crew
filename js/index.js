$(function(){
  "use strict";

  $("#form-where").typeahead({
    name: "where",
    local: ["Georgia", "USA", "India", "Mcdolans"]
  });

  $("#form-hackathon").typeahead({
    name: "hackathon",
    local: ["Hack@CST", "HackMIT", "DevFest Tbilisi", "Weekend MiniHack"]
  });

  $("#main-form").submit(function() {
  })
});