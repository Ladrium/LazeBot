require("dotenv").config({ path: __dirname + "/../.env"});
import { BaseClient, Config, GuildEntity, MemberEntity, UserEntity } from "./Lib";
import { createConnection } from "typeorm";

(async() => {
   const connection = await createConnection({
       type: "mongodb",
       url: Config.get("uri"),
       useNewUrlParser: true,
       useUnifiedTopology: true,
       synchronize: true,
       entities: [UserEntity, MemberEntity, GuildEntity]
   });

   const bot = new BaseClient(Config.get("token"));
   bot.start();
})()
