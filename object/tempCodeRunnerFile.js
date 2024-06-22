if(!Object.is || true){
//     Object.is = function ObjectIs(x,y){
//         var xNegZero =  isItNegZero(x)
//         var yNegzero =  isItNegZero(y)

//         if(xNegZero ||  yNegzero){
//             return xNegZero && yNegzero
//         }
//         else if(isItNaN(x) && isItNaN(y)){
//             return  true
//         }
//         else{
//             return x=== y
//         }

//         function isItNegZero(v){
//             return v  ==0  && (1/v) == -Infinity
//         }

//         function isItNaN(v){
//             return v ==!v
//         }
//     }
// }
