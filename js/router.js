CrewFinder.Router.map(function () {
  this.resource('crewfinder', { path: '/' });
});

CrewFinder.CrewfinderRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('hackathon');
  }
});