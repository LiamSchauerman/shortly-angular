angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {

	$scope.data = {};

	$scope.getLinks = function() {
		//PACKAGE response for ng
		Links.get()
			.then(function(resp){
				console.log(resp.data)
				$scope.data.links = resp.data
			})
			console.log("scope.data")
			console.log($scope.data)
	};
	$scope.click = function(obj){
			console.log("scope.data");
			console.log($scope.data);
			obj.visits++;

	}
	$scope.getLinks();

});
