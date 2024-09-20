async function permitedCharacters() {
    let permitted = [];

    if (process.env.UPPERCASE_LETTERS === "true") {
        permitted.push(..."ABCDEFGHIJKLMNOPQWRSTUVXYZ");
    }

    if (process.env.LOWERCASE_LETTERS === "true") {
        permitted.push(..."abcdefghijklmnoprstuvwxyz");
    }

    if (process.env.NUMBERS === "true") {
        permitted.push(..."0123456789");
    }

    if (process.env.SPECIAL_CHARACTERS === "true") {
        permitted.push(..."@#$%&*!()_-=+?");
    }

    return permitted;
}

export default permitedCharacters;