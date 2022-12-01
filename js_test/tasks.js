// task1 (не доделал, но старался :( ))
function giveMoney(n) {
    let counter = 0
    const moneyInBank = [1000, 500, 200, 100, 50]
    while (n > 0) {
        for (money of moneyInBank) {
            if (n > money) {
                counter ++
                n -= money
                console.log(money)
                console.log(n, 'aboba')
            }
        }
    }
}

giveMoney(1300)

// task2
function ann(str1, str2) {
    let temp1 = Array.from(str1).sort()
    let temp2 = Array.from(str2).sort()
    
    return temp1.join("").toLowerCase() === temp2.join("").toLowerCase()
}

// task3
function sortZero(arr) {
    resultArr = []
    let counter = 0
    for (num of arr) {
        if (num === 0) {
            counter ++
        } else {
            resultArr.push(num)
        }
    }
    for (let i = 0; i < counter; i++) {
        resultArr.push(num)
    }
    return resultArr
}
