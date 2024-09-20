import chalk from "chalk";
import handle from "./handle.js";


async function createPassword () {
    const password = await handle();
    console.log("Password:",chalk.yellow.bold(password));
}




export default createPassword;