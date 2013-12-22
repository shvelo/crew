(function(){
  if(!('localStorage' in window && 'map' in [])) {
    alert("U MAD BRO????");
  }

  window.CrewFinder = Ember.Application.create();
  CrewFinder.ApplicationAdapter = DS.FixtureAdapter;

  CrewFinder.CrewfinderView = Ember.View.extend({
    didInsertElement: function() {
        $("#form-hackathon").typeahead({
        name: "hackathon",
        local: data.hackathons.map(function(hackathon){ return hackathon.name })
      });
    }
  });
})();