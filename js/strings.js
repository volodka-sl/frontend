// strings

// task 1
function capitalizeStr(string) {
    const splittedStr = string.split(" ");
    for (let i = 0; i < splittedStr.length; i++) {
        splittedStr[i] =
            splittedStr[i][0].toUpperCase() + splittedStr[i].slice(1);
    }
    return splittedStr.join(" ");
}

// task 2
function cleanString(string) {
    let splittedStr = string.split(" ");
    for (let i = 0; i < splittedStr.length; i++) {
        splittedStr[i] = splittedStr[i].split(/[^a-z0-9а-я]/i).join("");
    }
    return splittedStr.join(" ");
}

// task 3
function isPalindrome(string) {
    if (string.length > 0) {
        if (string.split("").reverse().join("") == string) {
            return true;
        }
    }
    return false;
}

// task 4
function uniqueStr(string) {
    return Array.from(new Set(string)).join("");
}

// task 5
function replaceAll(find, replace, str) {
    return str.split(find).join(replace);
}
