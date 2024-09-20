import prompt from "prompt"
import chalk from "chalk";
import { PromptSchemaQrCode } from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";


PromptSchemaQrCode

export const createQRCode = async () => {
    prompt.get(PromptSchemaQrCode, handle);
    prompt.start();
}