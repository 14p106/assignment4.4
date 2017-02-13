(function () {
	'use strict';

	angular.module('MenuApp')
	.component('itemList', {
	  templateUrl: 'src/categorylist/templates/itemList.template.html',
	  bindings: {
	    items: '<'
	  }
	});

})();
