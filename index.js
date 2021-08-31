function receivesAFunction(cb){
    return cb();
};

function returnsANamedFunction() {
    function randomFunction() {return " ";}
    return randomFunction;
};

function returnsAnAnonymousFunction() {
    return function(){}
};