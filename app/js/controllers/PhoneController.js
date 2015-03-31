controllers.controller('PhoneController',
    ['$scope', '$rootScope', '$routeParams', '$http' ,function($scope, $rootScope, $routeParams, $http){

        /*
        * Get phone data
        * */
        $http.get('phones/'+ $routeParams.id + '.json').then(
            function(responce) {
                $scope.product = responce.data;
                $scope.product.quantity = 1;
            },
            function(error){
            //    TODO error message
            }
        );

        /*
        * Click event handler
        *  for small photo thumbnails
        * @params url {String} new main photo url
        * */
        $scope.setMainPhoto = function(url) {
            $scope.mainPhotoUrl = url;
        };

        /*
        * Switching tabs function
        * @params event{Object}
        * */
        $scope.switchTab = function(event) {
            event.preventDefault();
            $(event.target).tab('show');
        };

        /*
        * On quantity number changed handler.
        * Check if quantity number is more or equal 1
        *  if not set number equal 1.
        * */
        $scope.quantityChangeHandler = function (qnt) {
            (qnt < 1) && ($scope.product.quantity = 1)
        };

        /*
        * "add to cart" button click handler
        * @params product {Object}
        * */
        $scope.addNewItemToCart = function(event, product) {
            event.preventDefault();
            var cart = $rootScope.cart || {items: []};
            var item = _.findWhere(cart.items, {id: product.id});
            item ? item.quantity += 1 : cart.items.push(_.clone(product));
            $rootScope.cart = cart;
        }
}]);