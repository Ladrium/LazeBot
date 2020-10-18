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
        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            const commands = readdirSync(`${ dir }/${ category }`).filter((f) => f.endsWith(".js"));
            for (let i = 0; i < commands.length; i++) {
                const command = commands[i];
                let Cmd = require(`${ dir }/${ category }/${ command }`);
                Cmd = new Cmd();
                Cmd.category = category;
                Cmd.bot = this.bot;
                this.bot.commands.set(Cmd.name, Cmd);

                this.bot.log(`Command Loaded: ${Cmd.name}`, "cyan", 1);
            }
        }
    }

    public loadEvents(dir: string) {
        const categories = readdirSync(dir);
        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            const events = readdirSync(`${ dir }/${ category }`).filter((f) => f.endsWith(".js"));
            for (let i = 0; i < events.length; i++) {
                const event = events[i];
                let Evt = require(`${ dir }/${ category }/${ event }`);
                Evt = new Evt();
                Evt.bot = this.bot;
                this.bot.on(event.slice(0, -3), (...args) => Evt.run(...args));

                this.bot.log(`Event Loaded: ${Evt.name}`, "cyan", 1);
            }
        }
    }
}
