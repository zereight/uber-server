
import { GraphQLServer } from "graphql-yoga";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";

import schema from "./schema"

class App{
    public app : GraphQLServer;

    constructor(){
        this.app = new GraphQLServer({
            schema
        });

        this.middlewares();
    }

    private middlewares = () : void => {
        this.app.express.use(cors());
        this.app.express.use(logger("dev"));
        this.app.express.use(helmet());
    }
}

export default new App().app;