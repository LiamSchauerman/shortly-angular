angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
	$scope.data = {};

	$scope.getLinks = function() {
		Links.get()
			.then(function(data){
			//data = {links: resp.data}
			console.log('in promise')
			console.log(data)
		})

	};
	$scope.getLinks();

});
