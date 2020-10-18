import { BaseClient } from "../";

export class Event {
    public name: string;
    // @ts-ignore
    public bot: BaseClient;
    public constructor(name: string) {
        this.name = name;
    }
}
