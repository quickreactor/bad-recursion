function fib(num) {
    if (num === 1) {
        return [0,1];
    } else {
        let goose = fib(num-1)
        console.log(goose);
        return goose.concat([goose[goose.length - 1] + goose[goose.length-2]]);
    }
}

fib(8);