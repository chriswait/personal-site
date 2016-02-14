angular.module("personalSite")
.directive("blog", function() {
    return {
        templateUrl: "blog/blog.html",
        link: function(scope, element) {
        },
    };
})
.factory('PostService', function($http, $q) {
    var postsServiceInstance;
    var data = {
    };
    var load_posts = function() {
        var deferred = $q.defer();
        $http.get("/api/posts")
        .then(function(success_response) {
            data.posts = success_response.data;
            deferred.resolve(data.posts);
        }, function(failure_response) {
            deferred.reject();
        });
        return deferred.promise;
    };
    postsServiceInstance = {
        data: data,
        load_posts: load_posts,
    };
    return postsServiceInstance;
})
;
