(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryListListController', CategoryListListController);


CategoryListListController.$inject = ['$scope','MenuDataService'];
function CategoryListListController($scope, MenuDataService) {
  var categoryList = this;
  categoryList.name = [];

  categoryList.$onInit = function () {
    MenuDataService.getAllCategories()
    .then(function (result) {
      categoryList.name = result;
    });
  };

  //$scope.$watch('categoryselectedvalue', function(){
  	//console.log("categoryList", $scope.categoryselectedvalue);

  //});
}

})();
