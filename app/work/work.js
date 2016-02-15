angular.module("personalSite")
.directive("work", function() {
    return {
        templateUrl: "work/work.html",
        link: function(scope, element) {
        },
    };
})
.controller("WorkController", function($scope, WorkService) {
        WorkService.load_front_page_works()
        .then(function(data) {
            $scope.works = WorkService.data.works;
        });
})
.factory('WorkService', function($http, $q) {
    var worksServiceInstance;
    var data = {
    };
    var load_works = function(url) {
        var deferred = $q.defer();
        $http.get(url)
        .then(function(success_response) {
            data.works = success_response.data;
            deferred.resolve(data.works);
        }, function(failure_response) {
            deferred.reject();
        });
        return deferred.promise;
    };
    var load_all_works = function() {
        var url = "/api/works";
        return load_works(url);
    };
    var load_front_page_works = function() {
        var url = "/api/front-works";
        return load_works(url);
    };
    worksServiceInstance = {
        data: data,
        load_all_works: load_all_works,
        load_front_page_works: load_front_page_works,
    };
    return worksServiceInstance;
})
;
