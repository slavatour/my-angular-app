'use strict';

app.directive('buildPagination', [function(){
    return {
        template:"<h1>Hello!!!</h1>",
        restrict: 'AE',
        scope : {
            paginationNumber: '='
        },
        link: function($scope, $element, $attrs) {
            for (var i=0; i < $attrs.buildPagination; i++) {

            }
        }
    };
}]);