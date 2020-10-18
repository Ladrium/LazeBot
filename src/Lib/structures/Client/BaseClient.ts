import { Client, ClientOptions, Collection } from "discord.js";
import { BaseHandler } from "./BaseHandler";
import { Command } from "../../";
const colors = {
    black: "\u001b[30;1m",
    red: "\u001b[31;1m",
    green: "\u001b[32;1m",
    yellow: "\u001b[33;1m",
    blue: "\u001b[34;1m",
    magenta: "\u001b[35;1m",
    cyan: "\u001b[36;1m",
    white: "\u001b[37;1m",
    reset: "\u001b[0m"
};

export class BaseClient extends Client {
    public token: string;
    public commands: Collection<string, Command> = new Collection();
    public handler = new BaseHandler(this);
    constructor(token: string, options?: ClientOptions) {
        super(options);
        this.token = token;

    }

    public start() {
        this.log("Starting Bot!");
        this.handler.init({
            commands: __dirname + "/../../../Bot/commands",
            events: __dirname + "/../../../Bot/events"
        });
        super.login(this.token);
    }

    public log(text: string, color: "blue" | "green" | "red" | "yellow" | "magenta" | "cyan" | "white" | "reset" | "black" = "blue") {
        console.log(colors[color], text, colors.reset);
    }
}
