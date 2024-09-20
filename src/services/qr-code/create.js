import prompt from "prompt"
import chalk from "chalk";
import { promptQRCode } from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";


promptQRCode

export const createQRCode = async () => {
    prompt.get(promptQRCode, handle);
    prompt.start();
}