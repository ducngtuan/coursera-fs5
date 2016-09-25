(function () {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.toBuyItems;
    this.buyItem = ShoppingListCheckOffService.buyItem;
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.alreadyBoughtItems;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyItems = [
      {name: "cookies", quantity: 10},
      {name: "milk bottles", quantity: 3},
      {name: "eggs", quantity: 15},
      {name: "bags of chips", quantity: 5},
      {name: "angular book", quantity: 1}
    ];
    service.alreadyBoughtItems = [];

    service.buyItem = function (index) {
      var removedItem = service.toBuyItems.splice(index, 1)[0];
      service.alreadyBoughtItems.push(removedItem);
    };
  }
})();
