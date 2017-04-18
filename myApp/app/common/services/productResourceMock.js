'use strict' ;
(function (){
    var app = angular.module('productResourceMock',['ngMockE2E']);
    //app.run takes the function passed in as parameter,executes it when module is  loaded ,
    //must define default set of data
    // define fake responses
    app.run(function ($httpBackend) {
        var products = [
            {
                productId: 1,
                productName: 'The One Ring',
                productCode : 'ABC-123',
                releaseDate : " 12/02/2009",
                description: 'Lorem ipsum....',
                cost: 149.99,
                price: 622.22 ,
                imageUrl : "http://i.hizliresim.com/brErQ8.jpg"

            },
            {
                productId: 2,
                productName: 'The Sword of Aragorn',
                productCode : 'GSD-764',
                releaseDate : " 23/04/2015",
                description: 'Lorem ipsum....',
                cost: 113.22,
                price: 322.22 ,
                imageUrl : "http://i.hizliresim.com/5gngpR.jpg"
            },
            {
                productId: 3,
                productName: 'The Bow of Legolas',
                productCode : 'LHN-751',
                releaseDate : " 5/01/2011",
                description: 'Lorem ipsum....',
                cost: 112.62,
                price: 222.22 ,
                imageUrl : "http://i.hizliresim.com/X03027.jpg"
            },
            {
                productId: 4,
                productName: 'The Axe of Gimli',
                productCode : 'LPM-564',
                releaseDate : " 13/12/2013",
                description: 'Lorem ipsum....',
                cost: 193.22,
                price: 425.75 ,
                imageUrl : "http://i.hizliresim.com/QazaXk.jpg"
            },
            {
                productId: 5,
                productName: 'The Staff of Saruman',
                productCode : 'POO-074',
                releaseDate : " 05/02/2016",
                description: 'Lorem ipsum....',
                cost: 154.65,
                price: 621.15 ,
                imageUrl : "http://i.hizliresim.com/dPNP44.jpg"
            }
        ];

        var productUrl = "/api/products";
        //define what happens when get request sent (return the full list of products ofcourse! )
        $httpBackend.whenGET(productUrl).respond(products);
        //whenGet can take regExp
        var editingRegExp = new RegExp(productUrl + "/[0-9][0-9]*" , "");
        $httpBackend.whenGET(editingRegExp).respond(function (method,url,data) {
            var product = {"productId" : 0};
            var parameters =  url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0){
                for (var i = 0; i <products.length;i++){
                    if(products[i].productId == id){
                        product = products[i];
                        break;
                    }
                };
            }
            //200 = success
            return [200,product, {}];
        });

        $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
            var product = angular.fromJson(data);

            if (!product.productId) {
                // new product Id
                product.productId = products[products.length - 1].productId + 1;
                products.push(product);
            }
            else {
                // Updated product
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == product.productId) {
                        products[i] = product;
                        break;
                    }
                };
            }
            return [200, product, {}];
        });

        // Pass through any requests for application files, html files etc shouldnt be loaded from fake backend!
        $httpBackend.whenGET(/app/).passThrough();
    })
})();
