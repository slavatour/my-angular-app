'use strict';

app.directive('buildPagination', [function(){
    return {
        templateUrl: 'partials/components/paginationComponents.html',
        restrict: 'AE',
        replace: true,
        compile: function (tElement, tAttrs, transclude) {
            console.log();
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) {
                    scope.number = 1;
                },
                post: function postLink(scope, iElement, iAttrs, controller) {

                }
            }
        }
    };
}]);