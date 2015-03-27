
controllers.controller('ProductsListController', ['$scope', '$http', function($scope, $http){
    $scope.qntProducts = 3;
    $scope.currentPage = 0;
    $scope.currentList = [];

    $http.get("phones/phones.json").success(function(data){
        $scope.phones = data;
        $scope.maxPages = Math.ceil($scope.phones.length / $scope.qntProducts);
    });



}]);