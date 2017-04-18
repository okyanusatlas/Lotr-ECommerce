'use strict' ;
(function(){

    angular.module('productManagement').controller('ProductListCtrl',["productResource",ProductListCtrl]);
    //for backend call add parameter
    function ProductListCtrl(productResource){
        var vm = this;
       /* vm.products = [
            {
                productId: 1,
                productName: 'The One Ring',
                productCode : 'ABC-123',
                releaseDate : " 12.02.2009",
                description: 'Lorem ipsum....',
                cost: 149.99,
                price: 622.22 ,
                imageUrl : "http://i.hizliresim.com/brErQ8.jpg"

            },
            {
                productId: 2,
                productName: 'The Sword of Aragorn',
                productCode : 'GSD-764',
                releaseDate : " 23.04.2015",
                description: 'Lorem ipsum....',
                cost: 113.22,
                price: 322.22 ,
                imageUrl : "http://i.hizliresim.com/5gngpR.jpg"
            },
            {
                productId: 3,
                productName: 'The Bow of Legolas',
                productCode : 'LHN-751',
                releaseDate : " 5.01.2011",
                description: 'Lorem ipsum....',
                cost: 112.62,
                price: 222.22 ,
                imageUrl : "http://i.hizliresim.com/X03027.jpg"
            },
            {
                productId: 4,
                productName: 'The Axe of Gimli',
                productCode : 'LPM-564',
                releaseDate : " 13.12.2013",
                description: 'Lorem ipsum....',
                cost: 193.22,
                price: 425.75 ,
                imageUrl : "http://i.hizliresim.com/QazaXk.jpg"
            },
            {
                productId: 5,
                productName: 'The Staff of Saruman',
                productCode : 'POO-074',
                releaseDate : " 05.02.2016",
                description: 'Lorem ipsum....',
                cost: 154.65,
                price: 621.15 ,
                imageUrl : "http://i.hizliresim.com/dPNP44.jpg"
            }
        ]; */

       // no product return, URL cannot be found, because there isnt any server :(
       // create fake webservice $httpbackend
       productResource.query(function (data) {
          vm.products = data;
       });

        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }
    }

})();

console.log('I am working');