import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, d as createEventDispatcher, b as each, a as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { U as UserLink } from "../../../../chunks/UserLink.js";
import { a as user, u as userData } from "../../../../chunks/firebase.js";
import "firebase/firestore";
import { w as writable } from "../../../../chunks/index2.js";
const SortableList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".over.s-bF1CfGpt5Wxa{@apply border-gray-400 scale-105;}",
  map: null
};
const SortableList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { list } = $$props;
  let isOver = false;
  createEventDispatcher();
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  $$result.css.add(css);
  return `${list?.length ? `<ul class="list-none p-0 flex flex-col items-center">${each(list, (item, index) => {
    return `<li class="${[
      "border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full s-bF1CfGpt5Wxa",
      item.id === isOver ? "over" : ""
    ].join(" ").trim()}"${add_attribute("data-index", index, 0)}${add_attribute("data-id", item.id, 0)} draggable="true">${slots.default ? slots.default({ item, index }) : ``} </li>`;
  })}</ul>` : `<p class="text-center my-12 text-lg font-bold" data-svelte-h="svelte-1jmwi8z">No items</p>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $userData, $$unsubscribe_userData;
  let $formData, $$unsubscribe_formData;
  let $page, $$unsubscribe_page;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const formDefaults = {
    icon: "custom",
    title: "",
    url: "https://"
  };
  const formData = writable(formDefaults);
  validate_store(formData, "formData");
  $$unsubscribe_formData = subscribe(formData, (value) => $formData = value);
  let bio = data.bio || "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $formData.url.match(/^(ftp|http|https):\/\/[^ "]+$/);
  $formData.title.length < 20 && $formData.title.length > 0;
  bio.length <= 260;
  $$unsubscribe_user();
  $$unsubscribe_userData();
  $$unsubscribe_formData();
  $$unsubscribe_page();
  return `<div class="mb-12 pb-12"><main class="max-w-xl mx-auto">${$userData?.username == $page.params.username ? `<div class="profile-head mb-3"><h1 class="mx-2 text-2xl font-bold mt-8 mb-4 text-center" data-svelte-h="svelte-zzls1r">Edit your Profile</h1> <div class="text-center mb-6"><p>Profile Link:
            <a${add_attribute("href", `/${$userData?.username}`, 0)} class="link link-accent">https://linkforest.echen.io/${escape($userData?.username)}</a></p></div> <div class="text-center my-4"><a class="btn btn-outline btn-xs" href="/login/photo" data-svelte-h="svelte-1hnlagx">Change photo</a> </div> <form class="form-control"><label class="label cursor-pointer flex items-start justify-center"><span class="label-text mr-6"><div class="tooltip group-hover:tooltip-open" data-tip="If public, the world can see your profile">${escape($userData?.published ? "Public profile" : "Private profile")}</div></span> <input type="checkbox" class="toggle toggle-success" ${$userData?.published ? "checked" : ""}></label></form></div> <div class="bio mb-5 text-center"><p class="text-success mr-1 mb-3" data-svelte-h="svelte-186hfjf">Current Bio:</p> ${`<span class="border-solid border-2 border-blue-400 p-2 rounded-md"><button type="submit">${escape(!bio ? "<empty bio>" : bio)}</button></span>`}</div>  ${validate_component(SortableList, "SortableList").$$render($$result, { list: $userData?.links }, {}, {
    default: ({ item, index }) => {
      return `<div class="group relative">${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})} <button class="btn btn-xs btn-error invisible group-hover:visible transition-all absolute -right-6 bottom-10" data-svelte-h="svelte-1n5cbwc">Delete</button></div>`;
    }
  })} ${`<button class="btn btn-outline btn-info block mx-auto my-4" data-svelte-h="svelte-1l5hg7j">Add a Link</button>`}` : ``}</main></div>`;
});
export {
  Page as default
};
