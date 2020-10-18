import { Command } from "../../../Lib";
import { Message } from "discord.js";

export = class HelpCommand extends Command {
    constructor() {
        super("help");
    }
    public run(message: Message, args: string[]) {
        message.reply("Hello there! im not helping you for the moment");
    }
}
