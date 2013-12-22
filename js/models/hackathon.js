CrewFinder.Hackathon = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  picture: DS.attr(),
  featured: DS.attr(),
  country: DS.belongsTo('country')
});

CrewFinder.Hackathon.FIXTURES = data.hackathons;