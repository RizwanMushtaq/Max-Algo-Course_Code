let counter = 0

//Improved Soution with Dynamic Programming => O(n)
function fibWithDynamicP(n, memo){
    counter++

    let result
    if(memo[n]){
      return memo[n]  
    }
    if(n === 0 || n === 1){
        result = 1
    } else {
        result = fibWithDynamicP(n-1, memo) + fibWithDynamicP(n-2, memo)
    }
    memo[n] = result 
    return result
}

console.log(fibWithDynamicP(3, {}))
console.log('couter ' + counter)
counter = 0

console.log(fibWithDynamicP(4, {}))
console.log('couter ' + counter)
counter = 0

console.log(fibWithDynamicP(30, {}))
console.log('couter ' + counter)
counter = 0

console.log(fibWithDynamicP(40, {}))
console.log('couter ' + counter)
counter = 0

// console.log(fibWithDynamicP(50, {}))
// console.log('couter ' + counter)
// counter = 0


//************************************************** 
//Solution with Recursion  => O(2^n)
let counter2 = 0
function fibWithRecursionP(n){
    counter2++

    let result
    if(n === 0 || n === 1){
        result = 1
    } else {
        result = fibWithRecursionP(n-1) + fibWithRecursionP(n-2)
    }
    return result
}
console.log(fibWithRecursionP(3))
console.log('couter ' + counter2)
counter2 = 0

console.log(fibWithRecursionP(4))
console.log('couter ' + counter2)
counter2 = 0

console.log(fibWithRecursionP(30))
console.log('couter ' + counter2)
counter2 = 0

// console.log(fibWithRecursionP(10))
// console.log('couter ' + counter2)
// counter2 = 0