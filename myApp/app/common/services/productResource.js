'use strict' ;

(function (){
    //creating a service
    angular.module('common.services').factory('productResource',['$resource',productResource]);
    //back end call !
    function productResource($resource){
        return $resource("/api/products/:productId");
    }
})();