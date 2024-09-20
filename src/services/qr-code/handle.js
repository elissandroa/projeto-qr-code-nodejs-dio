import qr from 'qrcode-terminal'
import chalk from 'chalk';


async function handle(err, result) {
    if (err) {
        console.log("Error on aplication");
        return;
    }

    const isIsmal = result.type === 2;
        qr.generate(result.link, { small: isIsmal }, (qrcode) => {
            console.log(chalk.green("QR Code gerado com sucesso!\n"));
            console.log(qrcode);
        })
}

export default handle;