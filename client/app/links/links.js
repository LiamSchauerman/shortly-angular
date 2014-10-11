angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
	$scope.data = {};
	$scope.getLinks = function(){
		Links.fetchLinks().then(function(data){
			//data = {links: resp.data}
			console.log('in promise')
			console.log(data)
		})

	};
	$scope.getLinks();

});
