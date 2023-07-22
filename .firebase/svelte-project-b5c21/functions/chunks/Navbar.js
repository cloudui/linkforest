import { v as validate_store, s as subscribe } from "./utils.js";
import { c as create_ssr_component, e as escape } from "./ssr.js";
import { p as page } from "./stores.js";
import { a as user } from "./firebase.js";
import "firebase/auth";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $user, $$unsubscribe_user;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { username } = $$props;
  let { isUser } = $$props;
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.isUser === void 0 && $$bindings.isUser && isUser !== void 0)
    $$bindings.isUser(isUser);
  $$unsubscribe_page();
  $$unsubscribe_user();
  return `<div class="navbar"><div class="navbar-start"><div class="dropdown"><div tabindex="-1" class="btn btn-ghost btn-circle"><img src="/favicon.png" alt="logo" class="w-8 h-8"></div> <ul tabindex="-1" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><li><a href="/" data-svelte-h="svelte-1palrk3">Homepage</a></li> <li><a href="https://fireship.io/courses/sveltekit" data-svelte-h="svelte-qiato6">Inspiration</a></li> <li><a href="https://github.com/cloudui/linkforest" data-svelte-h="svelte-1j64183">Source Code</a></li></ul></div></div> ${isUser ? `<div class="navbar-center"><span class="${[
    "btn btn-ghost normal-case text-xl",
    $page.url.pathname === `/${username}` ? "btn-active" : ""
  ].join(" ").trim()}"><a href="${"/" + escape(username, true)}"><span class="text-base" data-svelte-h="svelte-a2lzzz">View</span></a></span> <span class="${[
    "btn btn-ghost normal-case text-xl btn-active",
    $page.url.pathname === `/${username}/edit` ? "btn-active" : ""
  ].join(" ").trim()}"><a href="${"/" + escape(username, true) + "/edit"}"><span class="text-base" data-svelte-h="svelte-1sbcs46">Edit</span></a></span></div>` : ``} <div class="navbar-end mr-2">${$user ? `<button class="btn btn-outline btn-xs" data-svelte-h="svelte-12ngns">Sign Out</button>` : `<a class="btn btn-outline btn-xs" href="/login" data-svelte-h="svelte-yu9wdc">Sign In</a>`}</div></div>`;
});
export {
  Navbar as N
};
