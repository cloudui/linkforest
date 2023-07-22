import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.5eebaf60.js","_app/immutable/chunks/scheduler.d83c174e.js","_app/immutable/chunks/index.6e71aa37.js","_app/immutable/chunks/stores.c42b6faf.js","_app/immutable/chunks/singletons.d8c269cc.js","_app/immutable/chunks/index.1eda10f5.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = [];
export const fonts = [];
