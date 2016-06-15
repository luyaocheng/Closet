app.controller('postDisplayController', ['$scope','$resource', 
	function($scope, $resource){

		var Post = $resource('/api/TestCollection2');

		Post.query(function(result){
			$scope.posts = result;
		})

		$scope.posts = [];

}])
