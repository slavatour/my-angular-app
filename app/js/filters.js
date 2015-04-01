'use strict';

app.filter('somefilter', function(){
    return function(input, qnt){
        console.log(input);
        console.log(qnt);
        return input;
    };
});