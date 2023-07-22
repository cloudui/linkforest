<script lang="ts">
  import { page } from '$app/stores';
  import { auth } from "$lib/firebase";
  import { signOut } from "firebase/auth";
  import { user } from "$lib/firebase";

  export let username: string;
  export let isUser: boolean;

  
  async function signOutSSR() {
    const res = await fetch("/api/signin", { method: "DELETE" });
    await signOut(auth);
  }

</script>

<div class="navbar">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="-1" class="btn btn-ghost btn-circle">
          <img src="/favicon.png" alt="logo" class="w-8 h-8" />
        </div>
        <ul
          tabindex="-1"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a href="/">Homepage</a></li>
          <li><a href="https://fireship.io/courses/sveltekit">Inspiration</a></li>
          <li>
            <a href="https://github.com/cloudui/linkforest">Source Code</a>
          </li>
        </ul>
      </div>
    </div>

    {#if isUser}
    <div class="navbar-center">
      <span 
        class="btn btn-ghost normal-case text-xl"
        class:btn-active={ $page.url.pathname === `/${username}` }>
          <a href="/{username}"><span class="text-base">View</span></a>
        </span>
      <span 
        class="btn btn-ghost normal-case text-xl btn-active"
        class:btn-active={ $page.url.pathname === `/${username}/edit` }>
          <a href="/{username}/edit"><span class="text-base">Edit</span></a>
      </span>
    </div>
    {/if}

    
    <div class="navbar-end mr-2">
      {#if $user}
        <button on:click={signOutSSR} class="btn btn-outline btn-xs">Sign Out</button>
      {:else}
        <a class="btn btn-outline btn-xs" href="/login">Sign In</a>
      {/if}
    </div>
  </div>