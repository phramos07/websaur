import {  Router } from "https://deno.land/x/oak/mod.ts";
import * as health from "../controllers/health.ts";

const router = new Router();

router.get(health.PATH, health.checkHealth);

export { 
    router
};