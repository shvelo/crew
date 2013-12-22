(function(){
  "use strict";

  if(!('localStorage' in window && 'map' in [])) {
    alert("U MAD BRO????");
  }

  var hackathon_names = data.hackathons.map(function(hackathon){ return hackathon.name });

  $("#form-hackathon").typeahead({
    name: "hackathon",
    local: hackathon_names
  });

  if("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(location) {
      console.log(location)
    })
  }
})();