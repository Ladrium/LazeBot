import { Client, ClientOptions } from "discord.js";
export class BaseClient extends Client {
    public token: string;
    constructor(token: string, options?: ClientOptions) {
        super(options);
        this.token = token;

    }
    public start(): void {
        super.login(this.token);
    }
}
