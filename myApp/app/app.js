'use strict';
(function(){
    //main module, dont forget dependencies, add immediatly !'
    //min. safe  array w/ dependencies
    var app = angular.module('productManagement',['common.services','ui.router','ui.mask','ui.bootstrap','productResourceMock']);
    // routing  here
    app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl:'app/welcomeView.html'
            })
            .state('productList',{
                url: '/products',
                templateUrl: "app/products/productListView.html",
                controller: "ProductListCtrl as vm"
            })
            .state('productEdit',{
                //this state cant be loaded maunually --> abstract
                abstract:true,
                // to take numbers use " : "
                url:'/products/edit/:productId',
                templateUrl: "app/products/productEditView.html",
                controller:'ProductEditCtrl as vm',
                resolve: {
                    productResource:'productResource',

                    product: function (productResource,$stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({productId: productId}).$promise;
                    }
                }
            })
            //nestes to productEdit
            .state('productEdit.info',{
                url:'info',
                templateUrl:'app/products/productEditInfoView.html'
            })
            .state('productEdit.price',{
                url:'price',
                templateUrl:'app/products/productEditPriceView.html'
            })
            .state('productDetail',{
                url:'/products/:productId',
                templateUrl:"app/products/productDetailView.html",
                controller:'ProductDetailCtrl as vm',
                resolve: {
                    productResource:'productResource',

                    product: function (productResource,$stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({productId: productId}).$promise;
                    }
                }
            })



    }]);
})();

//console.log('I am working too ');