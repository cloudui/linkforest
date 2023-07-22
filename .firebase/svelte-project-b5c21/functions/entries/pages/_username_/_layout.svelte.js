import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
import { u as userData } from "../../../chunks/firebase.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_userData();
  return `<div class="user-content">${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      username: data.username,
      isUser: data.username === $userData?.username
    },
    {},
    {}
  )} ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
