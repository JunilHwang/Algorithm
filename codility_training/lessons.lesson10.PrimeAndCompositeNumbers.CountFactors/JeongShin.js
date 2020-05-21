function solution(N) {
    if (N === 1)
        return 1
    const n = ~~Math.sqrt(N)
    let count = 0
    for (let i = 1; i <= n; i++) {
        if (N % i === 0) {
            count++;
        }
    }
    return count * 2 - (N / n === n) * 1
}