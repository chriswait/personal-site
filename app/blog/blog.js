angular.module("personalSite")
.directive("blog", function() {
    return {
        templateUrl: "blog/blog.html",
        link: function(scope, element) {
        },
    };
})
.controller("BlogController", function($scope, $attrs, PostService) {
        $scope.viewModel = {
        };
        var load_posts_function;
        if (angular.isDefined($attrs.query)) {
            if ($attrs.query === "all") {
                    load_posts_function = PostService.load_all_posts;
                    $scope.viewModel.showText = true;
            } else if ($attrs.query === "recent") {
                    load_posts_function = PostService.load_recent_posts;
                    $scope.viewModel.showPreview = true;
            }
        }
        if (angular.isDefined(load_posts_function)) {
            load_posts_function()
            .then(function(data) {
                $scope.posts = PostService.data.posts;
            });
        }
})
.factory('PostService', function($http, $q) {
    var postsServiceInstance;
    var data = {
    };
    var load_posts = function(url) {
        var deferred = $q.defer();
        $http.get(url)
        .then(function(success_response) {
            data.posts = success_response.data;
            deferred.resolve(data.posts);
        }, function(failure_response) {
            deferred.reject();
        });
        return deferred.promise;
    };
    var load_all_posts = function() {
        var url = "/api/posts";
        return load_posts(url);
    };
    var load_recent_posts = function() {
        var url = "/api/recent-posts";
        return load_posts(url);
    };

    postsServiceInstance = {
        data: data,
        load_all_posts: load_all_posts,
        load_recent_posts: load_recent_posts,
    };
    return postsServiceInstance;
})
;
