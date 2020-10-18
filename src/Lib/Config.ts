import config from "../config.json";
export const Config = {
    get(query: "token" | "uri" | "prefix") {
        return config[process.env.ENVIROMENT as "DEVELOPMENT" | "PRODUCTION"][query];
    }
};
