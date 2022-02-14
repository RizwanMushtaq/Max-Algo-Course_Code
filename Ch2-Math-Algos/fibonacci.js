function fib(index){
    let seq = [1,1]
    for(let i = 2; i<= index; i++){
        seq.push(seq[i-1] + seq[i-2])
    }
    return seq[index]
}

console.log(fib(4))
console.log(fib(5))

