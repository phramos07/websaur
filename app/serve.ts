import { WebServer } from "./app.ts";
import { router } from "./router/router.ts";

await new WebServer()
    .withRouter(router)
    .start();