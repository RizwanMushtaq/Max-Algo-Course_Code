function bubbleSort(arr){
    const resultArray = [...arr]

    for(let i = 0; i < resultArray.length; i++){
        for(let j = i+1; j < resultArray.length; j++){
            if(resultArray[j] < resultArray[i]){
                const dummy = resultArray[i]
                resultArray[i] = resultArray[j]
                resultArray[j] = dummy
            }
        }
    }

    return resultArray
}

console.log(bubbleSort([5, 10, -3, -10, 1, 100, 99]))