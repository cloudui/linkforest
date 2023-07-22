import { v as validate_store, s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { N as Navbar } from "../../chunks/Navbar.js";
import { u as userData } from "../../chunks/firebase.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#home.s-y_bCXRrkrYfP.s-y_bCXRrkrYfP{background-size:cover}#navbar.s-y_bCXRrkrYfP.s-y_bCXRrkrYfP{position:fixed;top:0;left:0;width:100%;z-index:9999\n}.hero.s-y_bCXRrkrYfP h1.s-y_bCXRrkrYfP{color:#c6e2ff;animation:s-y_bCXRrkrYfP-neon 1s ease-in-out infinite alternate}.hero.s-y_bCXRrkrYfP p.s-y_bCXRrkrYfP{color:rgb(177, 215, 255)}@keyframes s-y_bCXRrkrYfP-neon{from{text-shadow:0 0 6px rgba(202,228,225,0.92),\n    0 0 30px rgba(202,228,225,0.34),\n    0 0 12px rgba(30,132,242,0.52),\n    0 0 21px rgba(30,132,242,0.92),\n    0 0 34px rgba(30,132,242,0.78),\n    0 0 54px rgba(30,132,242,0.92)}to{text-shadow:0 0 6px rgba(202,228,225,0.98),\n    0 0 30px rgba(202,228,225,0.42),\n    0 0 12px rgba(30,132,242,0.58),\n    0 0 22px rgba(30,132,242,0.84),\n    0 0 38px rgba(30,132,242,0.88),\n    0 0 60px rgba(30,132,242,1)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$result.css.add(css);
  $$unsubscribe_userData();
  return `<div id="navbar" class="s-y_bCXRrkrYfP">${validate_component(Navbar, "Navbar").$$render($$result, { username: "/", isUser: false }, {}, {})}</div> <main id="home" class="flex w-full min-h-screen bg-[url('/forest.svg')] s-y_bCXRrkrYfP"><div class="hero backdrop-blur-sm s-y_bCXRrkrYfP"><div class="hero-content text-center"><div class="w-full"><h1 class="text-7xl font-bold s-y_bCXRrkrYfP" data-svelte-h="svelte-py01gu">LinkForest</h1> <p class="py-6 text-2xl s-y_bCXRrkrYfP" data-svelte-h="svelte-11lbweb">An innovative link-sharing website that was definitely my idea.</p> ${$userData?.username ? `<a href="${"/" + escape($userData.username, true) + "/edit"}" class="btn bg-blue-400 text-white hover:bg-blue-500">Edit Profile</a>` : `<a href="/login" class="btn bg-blue-400 text-white hover:bg-blue-500" data-svelte-h="svelte-8hg7ji">Get Started</a> <a href="/belowocean" class="btn btn-neutral text-white" data-svelte-h="svelte-tjldkp">Example Profile</a>`} <p class="py-6 s-y_bCXRrkrYfP">A slight modification of the code from <a class="link" href="https://github.com/fireship-io/fkit-course" data-svelte-h="svelte-19nrofp">Fireship&#39;s SvelteKit Course</a></p></div></div></div> </main>`;
});
export {
  Page as default
};
