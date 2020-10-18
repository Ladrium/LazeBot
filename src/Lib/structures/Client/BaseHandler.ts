import { readdirSync } from "fs";
import { BaseClient } from "./BaseClient";

export class BaseHandler {
    public bot: BaseClient;
    constructor(bot: BaseClient) {
        this.bot = bot;
    }
    public init({ commands, events }: { commands: string, events: string }) {
        this.loadCommands(commands);
        this.loadEvents(events);
    }

    public async loadCommands(dir: string) {
        const categories = readdirSync(dir);
        for(let i = 0; i < categories.length; i++) {
            const category = categories[i];
            const commands = readdirSync(`${dir}/${category}`).filter((f) => f.endsWith(".js"));
            for(let i = 0; i < commands.length; i++) {
                const command = commands[i];
                let Cmd = require(`${dir}/${category}/${command}`);
                Cmd = new Cmd();

                this.bot.commands.set(Cmd.name, Cmd);
            }
        }
    }

    public loadEvents(dir: string) {
        const events = readdirSync(dir);
    }
}
