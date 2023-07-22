<script lang="ts">
  import UserLink from "$lib/components/UserLink.svelte";
  import type { PageData } from "./$types";
  import { setContext } from 'svelte';
  import Meta from '$lib/components/Meta.svelte';

  export let data: PageData;
</script>

<div class="w-96 m-auto mt-8 mb-12 mx-auto">
  <main class="prose text-center mx-auto">

    <h1 class="text-3xl font-bold text-purple-500 mb-8">
      @{data.username}
    </h1>

    <img
      src={data.photoURL ?? "/user.webp"}
      alt="profile"
      width="400"
      height="400"
      class="mx-auto rounded drop-shadow"
    />

    <p class="text-lg my-8">{data.bio ?? "no bio yet..."}</p>
    <ul class="list-none px-2 m-0">
      {#each data.links as item}
        <li class="my-4">
          <UserLink {...item} />
        </li>
      {/each}
    </ul>
  </main>
</div>
