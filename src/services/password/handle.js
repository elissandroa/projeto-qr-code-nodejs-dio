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


async function handle() {
    let characters = [];
    let password = "";
    const passwordLenght = process.env.PASSWORD_LENGTH;
    characters = await permitedCharacters();
  
    for (let i = 0; i < passwordLenght; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    return password;
}

export default handle;