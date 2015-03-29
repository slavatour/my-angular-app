controllers.controller('CartController', ['$rootScope', '$scope', function($rootScope, $scope){
    $scope.continents = [
        {id:1, continent:'america'},
        {id:2, continent:'africa'},
        {id:2, continent:'europe'}
    ];
    var cart = $rootScope.cart || {};

    $scope.setTotalPrice = function() {
        if(cart.items && cart.items.length) {
            $scope.totalPrice = 0;
            angular.forEach(cart.items, function(item){
                $scope.totalPrice += (item.price * item.quantity);
            });
        }
    };

    $scope.submitCart = function(){
        console.log("submit", $scope.order);
    };

    $scope.removeItem = function(id){
        angular.forEach(cart.items, function (item, key) {
            item.id === id && delete cart.items[key];
        });
    };

    $scope.setTotalPrice();

}]);