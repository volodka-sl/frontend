// closure and scope

// task 1
function counter() {
    let currentCount = 0;

    return function () {
        return (currentCount += 1);
    };
}

let finalCounter = counter();

// task 1
function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        f.toString = function () {
            return currentSum;
        };
        return f;
    }

    return f;
}

sum(2)(10)(1);

// task 3
function generateRandUniqNum() {
    let used = [];
    return function () {
        if (used.length == 100) {
            return;
        }
        let generatedNumber = Math.floor(Math.random() * 100 + 1);
        for (let i = 0; i < used.length; i++) {
            if (used[i] == generatedNumber) {
                return;
            }
        }
        used.push(generatedNumber);
        return generatedNumber;
    };
}

let func = generateRandUniqNum();

// task 4
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log("Index: " + i + ", element: " + arr[i]);
    }, 0);
}
