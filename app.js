(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService) {
    var showListToBuy = this;

    showListToBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
    showListToBuy.isEmpty = ShoppingListCheckOffService.isListToBuyEmpty();

    $scope.boughtItem = function(index) {
      console.log("click button: index is ", index);

      ShoppingListCheckOffService.boughtItem(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var showListBought = this;

    showListBought.itemsBought = ShoppingListCheckOffService.getItemsBought();
    showListBought.isEmpty = ShoppingListCheckOffService.isListBoughtEmpty();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var buy = [
      { name: "cookies", quantity: 10 },
      { name: "oranges", quantity: 5  },
      { name: "bananas", quantity: 8  },
      { name: "stamps",  quantity: 3 },
      { name: "eggs",    quantity: 12 }
    ];
    var bought = [];

    service.getItemsToBuy = function () { return buy; };
    service.isListToBuyEmpty = function () { return buy[0] === undefined; };

    service.getItemsBought = function () { return bought; };
    service.isListBoughtEmpty = function () { return bought[0] === undefined; };

    service.BoughtItem = function(itemIndex) {
      var item = service.buy[itemIndex];

      service.buy.splice(itemIndex,1);
      service.bought.push(item);
    };
  }
})();
