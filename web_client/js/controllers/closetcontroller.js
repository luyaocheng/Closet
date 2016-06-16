app.controller('postDisplayController', ['$scope','$resource', 
	function($scope, $resource){

		$scope.message = "Post Controller Test"

		var Post = $resource('/api/posts');

		Post.query(function(result){
			$scope.posts = result;
		})

		$scope.createPost = function(){
			$scope.posts.push({
				authorName	: "Anonymous",
				talkMode	: $scope.talkModeRadio,
				postTime	: new Date(),
				postCat		: $scope.postCat,
				postBody	: $scope.postBody,
				postLikes	: 0,
				postCommentsLikes : 0,
				postComments: "This is a testing comment."

			})
		}
}])

