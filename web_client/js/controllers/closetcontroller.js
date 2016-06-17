app.controller('postDisplayController', ['$scope','$resource', 
	function($scope, $resource){

		$scope.message = "Post Controller Test"

		var Post = $resource('/api/posts');

		Post.query(function(result){
			$scope.posts = result;
		})

		// $scope.posts = []

		$scope.talkModeRadio = "Say"
		$scope.postCat = "School"

		$scope.createPost = function(){
			var post = new Post()
			post.authorName = "Anonymous";
			post.talkMode = $scope.talkModeRadio;
			post.postTime = new Date();
			post.postCat = $scope.postCat;
			post.postBody = $scope.postBody;
			post.postLikes = 0;
			post.postCommentsLikes = 0;
			post.postComments =  "This is a testing comment.";

			post.$save(function(result){
				$scope.posts.push(result)
				$scope.postBody = ''
			})

			// $scope.posts.push({
			// 	authorName	: "Anonymous",
			// 	talkMode	: $scope.talkModeRadio,
			// 	postTime	: new Date(),
			// 	postCat		: $scope.postCat,
			// 	postBody	: $scope.postBody,
			// 	postLikes	: 0,
			// 	postCommentsLikes : 0,
			// 	postComments: "This is a testing comment."
			// })
		}
}])

