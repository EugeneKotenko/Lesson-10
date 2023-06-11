"use strict"

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let keyResult = '';
    
    for(let i = 0; i < length; i++) {
        const randomGenerate = Math.floor(Math.random() * characters.length)
        keyResult += characters[randomGenerate]
    }
    return keyResult;
}

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i