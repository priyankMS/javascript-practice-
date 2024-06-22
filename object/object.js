if(!Object.is || true){
    Object.is = function ObjectIs(x,y){
        var xNegZero =  isItNegZero(x)
        var yNegzero =  isItNegZero(y)

        if(xNegZero ||  yNegzero){
            return xNegZero && yNegzero
        }
        else if(isItNaN(x) && isItNaN(y)){
            return  true
        }
        else{
            return x=== y
        }

        function isItNegZero(v){
            return v  ==0  && (1/v) == -Infinity
        }

        function isItNaN(v){
            return v ==!v
        }
    }
}


console.log(Object.is(42,42)===true);
console.log(Object.is("ok","ok")===true);
console.log(Object.is(null,null)===true);
console.log(Object.is(undefined,undefined)=== true);
console.log(Object.is(NaN,NaN)===true);
console.log(Object.is(0,0)===true);
console.log(Object.is(-0,-0,)==true);
