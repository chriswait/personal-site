var app = angular.module("personalSite", ['templates', 'ngMaterial']);

app.controller('MainController', function($scope, $document, $timeout, PostService, WorkService) {
        $scope.scrollToId = function(id) {
            var element = $document[0].getElementById(id);
            if (angular.isDefined(element)) {
                $timeout(function() {
                    if (id === "footer") {
                        element.scrollIntoView(false);
                    } else {
                        element.scrollIntoView(true);
                    }
                });
            }
        };
        PostService.load_posts()
        .then(function(data) {
            $scope.posts = PostService.data.posts;
        });
        WorkService.load_works()
        .then(function(data) {
            $scope.works = WorkService.data.works;
        });
})
;
