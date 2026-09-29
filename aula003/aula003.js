"use strict"

function teste() {
    let a = "X"
    if (true) {
        var b = "Y"
        console.log(a)
        console.log(b)
    }
    console.log(a)
    console.log(b)
}

teste()
console.log(a)
console.log(b)
const c = "Z"
c = "X"
console.log(c)