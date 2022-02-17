//using Recursion to solve it
function fact(number){
    if(number === 1){ //1
        return 1  //1
    }
    return number * fact(number-1) //1 
    
}
// What is time complexity?
// we have 4 function call for fact of 4
// In each function call we have -> O(1)
// But we trigger multiple function calls => n function calls
// T = n * O(1) => O(n)
// What is space complexity here?
// Space Complexity: O(n) because a new value is created for every nested function call (the parameter received)


// function fact(number){
//     let result = 1
//     for(let i=2; i<= number; i++){
//         result *= i
//     }
//     return result
// }
// What is time complexity here?
// T => O(n)
// What is spce complexity here?
// Space Complexity: O(1) because we operate on one and same number, no new permanent value is created per iteration.

console.log(fact(3))
console.log(fact(4))
console.log(fact(5))