function isPowerOfTwo(number){
    let divisionResult = number
    while(divisionResult > 1 ){
        if(divisionResult % 2 !== 0){
            return false
        }
        divisionResult = divisionResult / 2
    }
    
    return true
    
}

console.log(isPowerOfTwo(8)) //true
console.log(isPowerOfTwo(64)) //true
console.log(isPowerOfTwo(20)) //false
console.log(isPowerOfTwo(13)) //false

//Time complexity of algo
//Best case: number 13 -> O(n)
//Worst case: number 1000,000 -> Logarithmic Time complexity
//
