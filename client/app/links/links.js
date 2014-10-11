angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
	$scope.data = {};

	$scope.getLinks = function() {
		Links.get()
			.then(function(resp){
				var shortenedArr = []
				for (var i=0; i<resp.data.length; i++){
					shortenedArr.push(resp.data[i].base_url+'/'+resp.data[i].code)
				}
				$scope.data.links = shortenedArr;
			})

	};
	$scope.getLinks();

});
