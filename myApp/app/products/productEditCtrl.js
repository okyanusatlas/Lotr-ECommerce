'use strict';
(function (){
    angular.module('productManagement').controller('ProductEditCtrl',['product','productService','$state',ProductEditCtrl]);
    function ProductEditCtrl(product,productService,$state) {
        var vm = this ;

        vm.product= product; //comes from webserver
        vm.priceOption = "percent";
        //acts weirdly , unless I pass it  as a return function
        //vm.marginPercent = productService.calculateMarginPercent(vm.product.price,vm.product.cost);
        vm.marginPercent = function () {
          return  productService.calculateMarginPercent(vm.product.price,vm.product.cost);;
        };
        vm.calculatePrice= function () {
            var price = 0;

            if(vm.priceOption == 'amount'){
                price = productService.calculatePriceFromAmount(vm.product.cost,vm.markupAmount);
            }
            else {
                price = productService.calculatePriceFromMarkup(vm.product.cost,vm.markupPercent);
            }
            vm.product.price = price ;
        };

        if(vm.product && vm.product.productId){
            vm.title = 'Edit ' +vm.product.productName ;
        }
        else{
            vm.title = 'New Product'
        }
        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };
        vm.submit =  function () {
            vm.product.$save();
        };
        vm.cancel = function () {
            $state.go('productList');
        };
    }
})();