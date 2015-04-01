'use strict';

app.directive('buildPagination', [function(){
    return {
        templateUrl: 'partials/components/paginationComponents.html',
        restrict: 'AE',
        replace: true,
        compile: function (tElement, tAttrs, transclude) {
            console.log();
            return {
                post: createPagination
            }
        }
    };
}]);

function createPagination (scope, iElement, iAttrs, controller) {
    scope.$watch('qntProducts', function(newValue, oldValue){
        console.log(newValue);
        console.log(oldValue);
    });
}