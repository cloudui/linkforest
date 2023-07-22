import { c as create_ssr_component, e as escape, a as add_attribute, b as each, v as validate_component } from "../../../chunks/ssr.js";
import { U as UserLink } from "../../../chunks/UserLink.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="w-96 m-auto mt-8 mb-12 mx-auto"><main class="prose text-center mx-auto"><h1 class="text-3xl font-bold text-purple-500 mb-8">@${escape(data.username)}</h1> <img${add_attribute("src", data.photoURL ?? "/user.webp", 0)} alt="profile" width="400" height="400" class="mx-auto rounded drop-shadow"> <p class="text-lg my-8">${escape(data.bio ?? "no bio yet...")}</p> <ul class="list-none px-2 m-0">${each(data.links, (item) => {
    return `<li class="my-4">${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})} </li>`;
  })}</ul></main></div>`;
});
export {
  Page as default
};
