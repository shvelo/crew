CrewFinder.Hackathon = DS.Model.extend({
  id: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  picture: DS.attr('string'),
  featured: DS.attr('boolean')
});

CrewFinder.Hackathon.FIXTURES = data.hackathons;