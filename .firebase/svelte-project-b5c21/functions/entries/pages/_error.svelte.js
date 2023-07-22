import { v as validate_store, s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { N as Navbar } from "../../chunks/Navbar.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${validate_component(Navbar, "Navbar").$$render($$result, { username: "/", isUser: false }, {}, {})} <div class="w-full pt-12 mx-auto"><main class="prose text-center mx-auto"><h1 class="text-7xl text-error font-bold mb-3">${escape($page.status)} Error</h1> <p class="text-xl font-bold mb-8">${escape($page.error?.message || "Willy Wonka!")}</p> <img class="mx-auto my-5 rounded-lg" alt="error" src="/error.webp"></main></div>`;
});
export {
  Error as default
};
