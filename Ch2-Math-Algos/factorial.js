//Max approach
function fact(number){
    let result = 1  //1
    for(let i = 2; i <= number; i++){  //1
        result *= i  //n
    }
    return result  //1
}

// O(n)

//Rizwan approach
// function fact(number){
//     let result = number
//     let j = number
//     while(j > 1){
//         j = j-1
//         result *= j
//     }
//     return result
// }

console.log(fact(3)) //5
console.log(fact(5)) //120
console.log(fact(125)) 
