(function () {
'use strict';

angular.module('routes', ['ui.router'])
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/home',
    templateUrl: 'src/categorylist/templates/home.template.html'
  })

  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/categorylist/templates/categoriesList.template.html',
    controller: 'CategoryListListController as categoryList'
  })

  .state('itemList', {
    url: '/item-list?category',
    templateUrl: 'src/categorylist/templates/itemslist.template.html',
    controller: 'ItemListController as itemList'
  });
}

})();
