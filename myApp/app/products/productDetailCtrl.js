'use strict';
(function () {


    angular
        .module("productManagement")
        //ctrl function must be at the end otherwise  doesnt work
        .controller("ProductDetailCtrl", ['product','productService',ProductDetailCtrl]);

    function ProductDetailCtrl(product,productService) {
        var vm = this;
        vm.product = product;
       /* vm.product = {
            productId: 1,
            productName: 'The One Ring',
            productCode : 'ABC-123',
            releaseDate : " 12.02.2009",
            description: 'Lorem ipsum....',
            cost: 149.99,
            price: 622.22 ,
            imageUrl : "http://i.hizliresim.com/brErQ8.jpg"

        };*/

        vm.title = "Product Detail: " + vm.product.productName;

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
        //Take from Service send to view
        vm.marginPercent = productService.calculateMarginPercent(vm.product.price,vm.product.cost);
    }
}());
