// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordEl = document.getElementById("passwords")
let passwordLength = 8

const captitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

function addCapitalLetter() {
    let i = Math.floor(Math.random() * captitalLetters.length)
    return captitalLetters[i]
}

function addSmallLetter() {
    let i = Math.floor(Math.random() * smallLetters.length)
    return smallLetters[i]
}

function addNumber() {
    let i = Math.floor(Math.random() * numbers.length)
    return numbers[i]
}

function addSymbol() {
    let i = Math.floor(Math.random() * symbols.length)
    return symbols[i]
}

// let functionArray = [addCapitalLetter(), addSmallLetter(), addNumber(), addSymbol()]

function generatePassword() {
    let password = ""
    for(let i = 0; i < passwordLength; i++){
        let char = []
        char.push(addCapitalLetter());
        char.push(addSmallLetter());
        char.push(addNumber());
        char.push(addSymbol());
        let x = Math.floor(Math.random() * 4)
        password += char[x]
        
        // let char = Math.floor(Math.random() * 4)
        // password += functionArray[char]
    }
    // console.log(password)
    passwordEl.textContent = password
}

// console.log(generatePassword())



 