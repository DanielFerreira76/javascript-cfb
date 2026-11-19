let n1 = [10, 20, 30]
let n2 = [40, 50, 60]
let n3 = [...n1, ...n2]
console.log(n3)

let p1 = {nome: "Bruno", idade: 20, carteira: 150}
let p2 = {nome: "Bruce", idade: 10, cpf: 1234567}
let p3 = {...p1, ...p2}
console.log(p3)

const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}
let valores = [1, 5, 4]
console.log(soma(...valores))

const objs = document.getElementsByTagName("div")
const objs1 = [...objs]

objs1.forEach((el) => {
    console.log(el)
})

objs1.forEach((el) => {
    el.innerHTML = "JS"
})
