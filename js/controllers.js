var hackathonApp = angular.module('hackathonApp', []);
 
hackathonApp.controller('hackathonCtrl', function ($scope) {
  $scope.hackathons = data.hackathons;

  $scope.hackathons.featured = data.hackathons.map(function(hackathon) {
  	if(hackathon.featured) return hackathon;
  });
});
