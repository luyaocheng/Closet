app.controller('postDisplayController', ['$scope','$resource', 
	function($scope, $resource){

		$scope.message = "Post Controller Test"

		var Post = $resource('/api/posts');

		Post.query(function(result){
			$scope.posts = result;
		})

		$scope.posts = [];

}])
