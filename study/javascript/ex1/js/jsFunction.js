//anonymous function( a function without a name)
var x = function(a,b){return a*b};
var y = new Function("a","b","return a*c");

function testFunction(id) {
    var z=x(4,3);
    showMsg(id,z);
}


