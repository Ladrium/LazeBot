import { BaseEntity, Entity, ObjectID, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity("Guild")
export class GuildEntity extends BaseEntity {
    @ObjectIdColumn()
        public _id?: ObjectID;
    @PrimaryColumn()
        public gid: string;

    constructor(g: string) {
        super();
        this.gid = g;
    }
}
