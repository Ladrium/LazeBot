import { Config, Event } from "../../../Lib";
import { Message } from "discord.js";

const prefix = Config.get("prefix");

export = class MessageEvent extends Event {
    constructor() {
        super("MessageCreate");
    }
    run(message: Message) {
        if(!message.guild || !message.content.startsWith(prefix)) return;

        const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = this.bot.commands.get(cmd) || this.bot.commands.find((c) => c.aliases.includes(cmd));

        if(command) command.run(message, args);
    }
}
