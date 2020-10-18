import { BaseClient, ICommandOptions } from "../";
import { Message } from "discord.js";
export class Command {
    // @ts-ignore
    public bot: BaseClient;
    public name: string;
    public aliases: string[] = [];
    public category: string = "Main";
    public constructor(name: string, options?: ICommandOptions) {
        if(!name) throw new Error("No Name Given");
        this.name = name;
        if(options?.aliases) this.aliases = options.aliases;
    }

    public run(message: Message, args: string[]) {}
}
