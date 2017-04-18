'use strict' ;
(function () {
    angular.module('common.services').factory('productService',productService);
    //module pattern  { .... return { asd: asd , abc : abc };
    function productService () {
        //business logic here
        function calculateMarginPercent(price,cost) {
            var margin = 0;
            if(price && cost){
                margin = (100 * (price-cost)) / price ;
            }
            margin = Math.round(margin);
            return margin ;
        }
        function calculateMarginAmount(price,cost){
            var marginAmount = 0;
            if(price && cost){
                marginAmount = price - cost ;
            }
            return marginAmount ;
        }
        function calculatePriceFromMarkup(cost,percent){
            var calculatedPrice = cost;
            if(cost && percent){
                calculatedPrice = cost + ( cost * percent / 100);
                calculatedPrice = (Math.round(calculatedPrice*100))/100;
            }
            return calculatedPrice;
        }
        function calculatePriceFromAmount(cost, amount) {
            var price = cost;
            if (cost && amount) {
                price = cost + amount;
                price = (Math.round(price * 100)) / 100;
            }
            return price;
        }
        return {
            calculateMarginPercent : calculateMarginPercent,
            calculateMarginAmount : calculateMarginAmount,
            calculatePriceFromMarkup : calculatePriceFromMarkup,
            calculatePriceFromAmount :calculatePriceFromAmount
        }
    }
})();
//inject the service to ctrl , (add as parameter)
// then use it ; productService.calculatePrice etc. etc. ... DONE !  ^^
