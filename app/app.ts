import { Application, Context, Router } from "https://deno.land/x/oak/mod.ts";

import { Constants } from "./constants/index.ts";

export class WebServer {
  app: Application;

  constructor() {
    this.app = new Application();
  }

  withRouter(router : Router) {
    this.app.use(router.routes());
    this.app.use(router.allowedMethods());

    return this;
  }

  async start() {
    console.log(`Server running now on port ${Constants.PORT}`);
    await this.app.listen({ port: Constants.PORT });
  }
}
