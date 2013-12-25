CrewFinder.Hacker = DS.Model.extend({
  name: DS.attr(),
  bio: DS.attr(),
  picture: DS.attr(),
  featured: DS.attr(),
  hackathons: DS.hasMany('hackathon', {
  	async: true
  }),
  country: DS.belongsTo('country')
});

CrewFinder.Hacker.FIXTURES = data.hackers;