import prompt from 'prompt'
import { PromptSchemaMain } from './prompts-schema/prompt-schema-main.js'
import chalk from 'chalk';
import { createQRCode } from './services/qr-code/create.js';
import createPassword from './services/password/create.js';


(async function main() {
    prompt.get(PromptSchemaMain, async (err, choose) => {

        if (err) console.log(err);

        if (choose.select == 1) {
            console.log(chalk.bgWhite.black.bold("Escolheu QrCode!"));
            await createQRCode();
        }
        if (choose.select == 2) {
            await createPassword();
        }
    });
}())

