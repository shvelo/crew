CrewFinder.Router.map(function () {
  this.resource('crewfinder', { path: '/' });
});

CrewFinder.HackathonsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('hackathon');
  }
});