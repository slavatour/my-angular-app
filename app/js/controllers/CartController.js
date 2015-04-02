controllers.controller('CartController', ['$rootScope', '$scope', function($rootScope, $scope){
    $scope.continents = [
        {id:1, continent:'america'},
        {id:2, continent:'africa'},
        {id:2, continent:'europe'}
    ];
    var cart = $rootScope.cart || {};
    $('.userForm .hasPopover').popover()
    $scope.setTotalPrice = function() {
        $scope.totalPrice = 0;
        if(cart.items && cart.items.length) {
            angular.forEach(cart.items, function(item){
                $scope.totalPrice += (item.price * item.quantity);
            });
        }
    };

    $scope.submitCart = function(){
        console.log("submit", $scope.order);
    };

    $scope.removeItem = function(item){
        var index = cart.items.indexOf(item);
        cart.items.splice(index, 1);
        $scope.setTotalPrice();
    };

    $scope.setTotalPrice();

}]);