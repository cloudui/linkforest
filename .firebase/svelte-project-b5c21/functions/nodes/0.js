import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.ca3f3d39.js","_app/immutable/chunks/scheduler.d83c174e.js","_app/immutable/chunks/index.6e71aa37.js","_app/immutable/chunks/firebase.dfe6b682.js","_app/immutable/chunks/index.1eda10f5.js","_app/immutable/chunks/stores.c42b6faf.js","_app/immutable/chunks/singletons.d8c269cc.js"];
export const stylesheets = ["_app/immutable/assets/0.23e41d99.css"];
export const fonts = [];
