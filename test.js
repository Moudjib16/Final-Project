let test ="2024-05-55"
if (test[9] === undefined) {
    test = test.slice(0, 8) + '0' + test.slice(8);
}
console.log(test);