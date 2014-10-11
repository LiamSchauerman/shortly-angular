angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  // Your code here
  $scope.link = {
  	url: null
  };
  $scope.addLink = function(){
		console.log('addlink running');
		Links.post($scope.link)
			.then(function(resp) {
				console.log(resp)
			})
	};

});
