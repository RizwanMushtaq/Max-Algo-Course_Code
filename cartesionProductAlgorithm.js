//cartesion Product Algorithm
function cartProduct(setA, setB){
    let result = []
    if(!setA.length || !setB.length){
        return {message :"one or both input arrays are empty"}
    }
    for(const itemA of setA){
        for(const itemB of setB){
            result.push([itemA, itemB])
        }
    }
    return result
}

//Time Complexity => O(n * m)
//Space Complexity => O(n * m) because we store new value in each step

const colors = ['red', 'blue']
const sizes = ['s', 'm', 'l']
console.table(cartProduct(colors, sizes)) 