import * as universal from '../entries/pages/_username_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[username]/+page.ts";
export const imports = ["_app/immutable/nodes/5.e0805d64.js","_app/immutable/chunks/firebase.dfe6b682.js","_app/immutable/chunks/index.1eda10f5.js","_app/immutable/chunks/scheduler.d83c174e.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.6e71aa37.js","_app/immutable/chunks/UserLink.7dda5c37.js","_app/immutable/chunks/stores.c42b6faf.js","_app/immutable/chunks/singletons.d8c269cc.js"];
export const stylesheets = [];
export const fonts = [];
