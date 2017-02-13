(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);


ItemListController.$inject = ['$scope', 'MenuDataService', '$stateParams'];
function ItemListController($scope, MenuDataService, $stateParams) {
  var itemList = this;
  itemList.name = [];
  itemList.category = $stateParams.category;
  itemList.$onInit = function () {
    console.log("controller loaded successfully");
    var url = "https://davids-restaurant.herokuapp.com/menu_items.json?category="+itemList.category;
    MenuDataService.getItemsForCategory(url)
    .then(function (result) {
      itemList.category = result.category.name;
      itemList.name = result.menu_items;
    });
  };

  //$scope.$watch('categoryselectedvalue', function(){
  	//console.log("categoryList", $scope.categoryselectedvalue);

  //});
}

})();
