//cartesion Product Algorithm
function cartProduct(setA, setB){
    let result = []
    if(!setA.length || !setB.length){
        return {message :"one or both input arrays are empty"}
    }

    for(let itemA of setA){
        if(!Array.isArray(itemA)){
            itemA = [itemA]
        }
        for(const itemB of setB){
            result.push([...itemA, itemB])
        }
    }
    return result
}
//cartesian Product Algorithm Without Limits
function cartesian(...sets){
    console.log(sets)
    let tempProduct = sets[0]

    let result = []
    for(let i= 1; i < sets.length; i++){
        tempProduct = cartProduct(tempProduct, sets[i])
    }
    return tempProduct
}

//Time Complexity => O(n^x) where x is number imput sets we are getting and n is length of longest array
//Space Complexity => O(n^x)

const colors = ['red', 'blue']
const sizes = ['s', 'm']
const styles = ['round neck', 'v neck']
console.table(cartesian(colors, sizes, styles)) 