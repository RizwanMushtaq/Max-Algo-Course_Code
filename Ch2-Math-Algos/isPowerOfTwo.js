//Improved Solution
function isPowerOfTwo(number){
    if(number < 1) {
        return false
    }

    return (number & (number - 1)) === 0
}

//Now we have O(1)


// function isPowerOfTwo(number){
    // if(number < 1) {
    //     return false
    // }
//     let divisionResult = number
//     while(divisionResult > 1 ){
//         if(divisionResult % 2 !== 0){
//             return false
//         }
//         divisionResult = divisionResult / 2
//         console.log('executing...')
//     }
    
//     return true
    
// }

console.log(isPowerOfTwo(8)) //true
console.log(isPowerOfTwo(64)) //true
console.log(isPowerOfTwo(20)) //false

console.log(isPowerOfTwo(1000000)) //false
console.log(isPowerOfTwo(1125899906842624)) //true

//Time complexity of algo
//Best case: number 13 -> O(1)
//Worst case: number 1000,000 -> Logarithmic Time complexity
//Average case: number 1,125,899,906,842,624 -> O(log n)
