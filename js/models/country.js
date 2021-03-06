CrewFinder.Country = DS.Model.extend({
  name: DS.attr(),
  hackathons: DS.hasMany('hackathon', {
  	async: true
  }),
  hackers: DS.hasMany('hacker', {
  	async: true
  })
});

CrewFinder.Country.FIXTURES = data.countries;