var app = angular.module("personalSite", ['templates', 'ngMaterial']);

app.controller('MainController', function($scope, $document, $timeout) {
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
})
;
