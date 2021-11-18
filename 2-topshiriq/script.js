function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

let num = +prompt("kvadratning o'lchamini kiriting men u kvadratni va uning dioganalini chizib beraman")
while (isNaN(num) || num == 0) {
    num = +prompt('Kvadratning o`lchamiga natural son kiriting')
}
let kvadrat = ""
for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
        if (i == j || i == 0 || j == 0 || j == (num - 1) || i == (num - 1)) {
            kvadrat += "[*]"
        }
        else {
            kvadrat += "   "
        }
    }
    console.log(kvadrat);
    kvadrat = ""
}
alert('Siz hohlagan kvadrat tayyor uni console da ko`rishingiz mumkin')