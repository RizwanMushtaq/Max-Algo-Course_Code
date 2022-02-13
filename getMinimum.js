//find minimum number from an array
function getMinimum(numbers){
    let minimum = numbers[0] //1
    for(number of numbers){ //1
        if(minimum > number){ //n
            minimum = number //? 0 Best Case, 2 Worst Case, 1 Avergae Case
        }
    }
    return minimum // 1
}

console.log(getMinimum([5, 8, 1]))
console.log(getMinimum([-5, 0, 1, -9]))
// Best Case: [1, 2, 3] => n
// Worst Case: [3, 2, 1] => n
// Average Case: [2, 1, 3] => n
//-> O(n)


//improved version of isEven function
function isEven(number){
    return number % 2 === 0 //1
}

//return true if number is even
// function isEven(number){
//     if(number % 2 === 0){ //1
//         return true
//     }
//     return false //1
// }

console.log(isEven(10))
console.log(isEven(9))
//-> O(1) 
