(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService) {
    $scope.boughtItem = function(index) {
      ShoppingListCheckOffService.boughtItem(index);
    };
    $scope.itemsToBuy = function() {
      return ShoppingListCheckOffService.getItemsToBuy();
    };
    $scope.isEmpty = function() {
      return ShoppingListCheckOffService.isListToBuyEmpty();
    };
  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
    $scope.itemsBought = function() { return ShoppingListCheckOffService.getItemsBought(); };
    $scope.isEmpty = function() { return ShoppingListCheckOffService.isListBoughtEmpty();  };
  }

  function ShoppingListCheckOffService() {
    var buy = [
      { name: "cookies", quantity: 10 },
      { name: "oranges", quantity: 5  },
      { name: "bananas", quantity: 8  },
      { name: "stamps",  quantity: 3 },
      { name: "eggs",    quantity: 12 }
    ];
    var bought = [];

    return {
      boughtItem: function(itemIndex) {
          var item = buy[itemIndex];

          buy.splice(itemIndex,1);
          bought.push(item);
        },
      getItemsToBuy: function () { return buy; },
      isListToBuyEmpty: function () { return buy[0] === undefined; },
      getItemsBought: function () { return bought; },
      isListBoughtEmpty: function () { return bought[0] === undefined; }
    };
  }
})();
