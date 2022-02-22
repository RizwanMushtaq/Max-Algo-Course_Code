// Permutations with repetition

function getPermutations(options, length){
    const permutations = []
    if(length === 1){
        return options.map(option => [option])
    }

    const partialPermutations = getPermutations(options, length - 1)
    // [[1], [2], [3]]

    for (const option of options) {
        for (const existingPermutation of partialPermutations) {
            permutations.push([option].concat(existingPermutation))
        }
    }

    return permutations
}

//Time Complexity: O(n^r) => n is the number options, r is the length

const digits = [1, 2, 3]
const resultLength = 3

console.log(getPermutations(digits, resultLength))