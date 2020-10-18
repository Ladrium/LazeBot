import { BaseEntity, Entity, ObjectID, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity("User")
export class UserEntity extends BaseEntity {
    @ObjectIdColumn() public _id?: ObjectID;
    @PrimaryColumn() public uid: string;

    constructor(u: string) {
        super();
        this.uid = u;
    }
}
