import { BaseClient, Event } from "../../../Lib";

export = class ReadyEvent extends Event {
    public constructor() {
        super("StartUp");
    }
    public run() {
        this.bot.log(`Bot Ready (${this.bot.user!.username})`, "yellow");
    }
}
