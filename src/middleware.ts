import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((ctx, next) => {
  return next();
});
