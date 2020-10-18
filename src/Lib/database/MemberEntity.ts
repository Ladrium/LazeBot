import { BaseEntity, Entity, ObjectID, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity("Member")
export class MemberEntity extends BaseEntity {
    @ObjectIdColumn() public _id?: ObjectID;
    @PrimaryColumn() public gid: string;
    @PrimaryColumn() public uid: string;

    constructor(g: string, u: string) {
        super();
        this.gid = g;
        this.uid = u;
    }
}
