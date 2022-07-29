// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { currencyRouter } from "./currency";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("currency.", currencyRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
