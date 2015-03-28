controllers.controller('PhoneController',
    ['$scope', '$routeParams', '$httpPhone',function($scope, $routeParams, $httpPhone){
        $scope.product = {
            price: 123,
            oldPrice: 250,
            quantity: 1
        };

        /*
        * Get phone data
        * */
        $httpPhone.getPhone($routeParams.id);

        /*
        * Click event handler
        *  for small photo thumbnails
        * @params url {String} new main photo url
        * */
        $scope.setMainPhoto = function(url) {
            $scope.mainPhotoUrl = url;
        }
}]);