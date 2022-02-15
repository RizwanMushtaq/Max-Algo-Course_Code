//using Recursion to solve it
function fact(number){
    if(number === 1){ //1
        return 1  //1
    }
    return number * fact(number-1) //1 
    //we have 4 function call for fact of 4
    //In each function call we have -> O(1)
    // But we trigger multiple function calls => n function calls
    // T = n * O(1) => O(n)
}


// function fact(number){
//     let result = 1
//     for(let i=2; i<= number; i++){
//         result *= i
//     }
//     return result
// }

console.log(fact(3))
console.log(fact(4))
console.log(fact(5))