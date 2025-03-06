const calcFactorial = (n) => {
    if(n < 0) throw new Error("Number must be positive");
    if(n === 1) return 1;
    return calcFactorial(n - 1) * n;
}
console.log(calcFactorial(3));