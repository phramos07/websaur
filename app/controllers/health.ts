import { Context } from "https://deno.land/x/oak/mod.ts";

const PATH = "/health";

const checkHealth = async (ctx: Context) => {
  ctx.response.status = 200;
  ctx.response.body = { data: "All is fine." };
};

export {
  checkHealth,
  PATH,
};
