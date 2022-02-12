function sumNumbers(numbers){
    let result = 0
    for(let i=0; i<numbers.length; i++){
        result = result + numbers[i]
    }
    return result
}

console.log(sumNumbers([1, 3, 10, 10]))

//T= 1+1+n+1
//T= 3+n
//T= n
//O(n)

