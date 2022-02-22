// Permutations without Repetitions

function getPermutations(options) {
    const permutations = []

    if(options.length === 1){
        return [options]
    }

    const partialPermutations = getPermutations(options.slice(1))
    // [['order food']]

    const firstOption = options[0]

    for(let i = 0; i < partialPermutations.length; i++){
        const partialPermutation = partialPermutations[i]

        for(let j = 0; j <= partialPermutation.length; j++){
            const permutationInFront = partialPermutation.slice(0, j)
            const permutationAfter = partialPermutation.slice(j)
            permutations.push(
                permutationInFront.concat([firstOption], permutationAfter)
            )
        }
    }

    return permutations
}

//Time Complexity => O(n!)
//Space Complexity => O(n!)

const todoListItems = [
    'walk the dog',
    'clean the toilet',
    'buy groceries'
]

console.table(getPermutations(todoListItems))