import { v as validate_store, s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as add_attribute } from "../../chunks/ssr.js";
import { u as userData, a as user } from "../../chunks/firebase.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_userData;
  let $$unsubscribe_user;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => value);
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  let title = $page.data.title;
  let description = $page.data.description;
  let imageUrl = $page.data.imageUrl;
  let twitterCard = $page.data.twitterCard;
  $$unsubscribe_page();
  $$unsubscribe_userData();
  $$unsubscribe_user();
  return `${$$result.head += `<!-- HEAD_svelte-1c2zyo1_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", imageUrl, 0)}><meta property="og:url"${add_attribute("content", $page.url.pathname, 0)}><meta name="twitter:card"${add_attribute("content", twitterCard, 0)}><meta name="twitter:title"${add_attribute("content", title, 0)}><meta name="twitter:description"${add_attribute("content", description, 0)}><meta name="twitter:image"${add_attribute("content", imageUrl, 0)}><!-- HEAD_svelte-1c2zyo1_END -->`, ""} <div class="min-h-screen flex flex-col">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
