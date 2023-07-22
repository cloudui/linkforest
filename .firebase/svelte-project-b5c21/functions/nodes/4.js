

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.7bf2d6f1.js","_app/immutable/chunks/scheduler.d83c174e.js","_app/immutable/chunks/index.6e71aa37.js","_app/immutable/chunks/Navbar.5df12eb6.js","_app/immutable/chunks/stores.c42b6faf.js","_app/immutable/chunks/singletons.d8c269cc.js","_app/immutable/chunks/index.1eda10f5.js","_app/immutable/chunks/firebase.dfe6b682.js"];
export const stylesheets = ["_app/immutable/assets/4.d373d3c6.css"];
export const fonts = [];
