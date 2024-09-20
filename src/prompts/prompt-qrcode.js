import chalk from "chalk";
import prompt from "prompt";


export const promptQRCode = [
    {
        name: 'link',
        description: chalk.yellow('Digite o link para gerar o QR CODE'),
    },
    {
        name: "type",
        description: chalk.yellow('Escolha entre o tipo de QRCode (1 - NORMAL (2-TERMINAL'),
        pattern: /^[1,2]+$/,
        message: chalk.red.italic('Escolha apenas entre 1 e 2')
    }
]