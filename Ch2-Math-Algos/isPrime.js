// improved code for finding prime number
// -> O(sqrt(n))
function isPrime(number){
    for(let i = 2; i <= Math.sqrt(number) ; i++){
        let reminder = number%i
        if(reminder === 0){
            return false
        } 
    }
    return true
}

console.log(isPrime(5))
console.log(isPrime(9)) 


// function isPrime(number){
//     for(let i = 2; i <number; i++){
//         let reminder = number%i
//         if(reminder === 0){
//             return false
//         } 
//     }
//     return true
// }
// -> O(n)