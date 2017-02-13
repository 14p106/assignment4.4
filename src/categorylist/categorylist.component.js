(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/categorylist/templates/categorylist.template.html',
  bindings: {
    items: '<',
    categoryselectedvalue: '='
  },
  controller: function($state){

  		this.categorySelected = function(categorySelected){
  			this.categoryselectedvalue = categorySelected;
  			$state.go('itemList', {category : this.categoryselectedvalue});
  		}
  }
});

})();
