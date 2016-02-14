angular.module("personalSite")
.directive("work", function() {
    return {
        templateUrl: "work/work.html",
        link: function(scope, element) {
        },
    };
})
.factory('WorkService', function($http, $q) {
    var worksServiceInstance;
    var data = {
    };
    var load_works = function() {
        var deferred = $q.defer();
        $http.get("/api/works")
        .then(function(success_response) {
            data.works = success_response.data;
            deferred.resolve(data.works);
        }, function(failure_response) {
            deferred.reject();
        });
        return deferred.promise;
    };
    worksServiceInstance = {
        data: data,
        load_works: load_works,
    };
    return worksServiceInstance;
})
;
