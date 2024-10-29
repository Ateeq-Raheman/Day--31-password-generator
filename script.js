const resultel = document.getElementById("result")
const lengthel = document.getElementById("length")
const Uppercaseel = document.getElementById("Uppercase")
const lowecaseel = document.getElementById("lowecase")
const numbersel = document.getElementById("numbers")
const symbolsel = document.getElementById("symbols")
const clipboardel = document.getElementById("clipboard")
const generateel = document.getElementById("generate")

const randomfunction = {
    lower: lowercase,
    upper: uppercase,
    number: numbers,
    symbol: symbols
}

clipboardel.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const password = resultel.innerText
    if (!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("Password Has Been Copied")

})

generateel.addEventListener("click", () => {
    const length = +lengthel.value
    const haslower = lowecaseel.checked
    const hasupper = Uppercaseel.checked
    const hasnumber = numbersel.checked
    const hassymbol = symbolsel.checked

    resultel.innerText = generatepassword(haslower, hasnumber, hassymbol, hasupper, length)
})

function generatepassword(lower, upper, number, symbol, length) {
    let generatedpassword = ""
    const typescount = lower + upper + number + symbol
    console.log(typescount)
    const typesarray = [{ lower }, { upper }, { number }, { symbol }].
        filter(item => Object.values(item)[0])
    console.log(typesarray)

    if (typescount === 0) {
        return " "
    }

    for (let i = 0; i < length; i += typescount) {
        typesarray.forEach(type => {
            console.log(type)
            const funcname = Object.keys(type)[0]
            generatedpassword += randomfunction[funcname]()
        })
    }
    const finalpass = generatedpassword.slice(0, length)
    return finalpass
}

function uppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function lowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function numbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function symbols() {
    const symbols = "!@#$%^&*(){}[]=+<>?,."
    return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(uppercase())
console.log(lowercase())
console.log(numbers())
console.log(symbols())