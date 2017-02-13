(function () {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$q', '$timeout', '$http']
  function MenuDataService($q, $timeout, $http) {
    var service = this;
    service.getAllCategories = function () {
      var deferred = $q.defer();
      $http.get("https://davids-restaurant.herokuapp.com/categories.json").then(function(result){
        deferred.resolve(result.data);
      });
      return deferred.promise;
    };

    service.getItemsForCategory = function (url) {
      var deferred = $q.defer();
      $http.get(url).then(function(result){
        deferred.resolve(result.data);
      });
      return deferred.promise;
    };
  }
})();
