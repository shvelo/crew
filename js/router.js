CrewFinder.Router.map(function () {
  this.resource('crewfinder', { path: '/' });
});

CrewFinder.HackathonRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('hackathon', 1);
  }
});