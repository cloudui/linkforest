  <script lang="ts">
    import type { PageData } from "./$types";
    import { page } from "$app/stores";
    import UserLink from "$lib/components/UserLink.svelte";
    import { db, userData, user } from "$lib/firebase";
    import {
      arrayRemove,
      arrayUnion,
      doc,
      setDoc,
      updateDoc,
    } from "firebase/firestore";
    import { writable } from "svelte/store";
    import SortableList from "$lib/components/SortableList.svelte";
    // import { get } from "svelte/store";
    // import { enhance } from "$app/forms";

    export let data: PageData;
  
    const icons = [
      "Blog",
      "Twitter",
      "YouTube",
      "TikTok",
      "LinkedIn",
      "GitHub",
      "Instagram",
      "Custom",
    ];

    const formDefaults = {
      icon: "custom",
      title: "",
      url: "https://",
    };

    const formData = writable(formDefaults);
  
    let showForm = false;
    let editBio = false;
    let bio = data.bio || "";
  
    $: urlIsValid = $formData.url.match(/^(ftp|http|https):\/\/[^ "]+$/);
    $: titleIsValid = $formData.title.length < 20 && $formData.title.length > 0;
    $: formIsValid = urlIsValid && titleIsValid;
    $: bioIsValid = bio.length <= 260;
  
    async function addLink(e: SubmitEvent) {
      const userRef = doc(db, "users", $user!.uid);
  
      await updateDoc(userRef, {
        links: arrayUnion({
          ...$formData,
          id: Date.now().toString(),
        }),
      });
  
      formData.set({
        icon: "",
        title: "",
        url: "",
      });
  
      showForm = false;
    }
  
    async function deleteLink(item: any) {
      const userRef = doc(db, "users", $user!.uid);
      await updateDoc(userRef, {
        links: arrayRemove(item),
      });
    }
  
    function cancelLink() {
      formData.set(formDefaults);
      showForm = false;
    }

    function sortList(e: CustomEvent) {
      const newList = e.detail;
      const userRef = doc(db, "users", $user!.uid);
      setDoc(userRef, { links: newList }, { merge: true });
    }
  
    async function toggleProfileStatus(item: any) {
      const userRef = doc(db, "users", $user!.uid);
      await updateDoc(userRef, {
        published: !$userData?.published,
      });
    }

    function toggleBio() {
      editBio = true;
    }

    async function handleBioSubmit(e: SubmitEvent) {
      if (!bioIsValid) return;

      const userRef = doc(db, "users", $user!.uid);
      await updateDoc(userRef, {
        bio: bio,
      });
      editBio = false;
    }
</script>
 
<div class="mb-12 pb-12">
  <main class="max-w-xl mx-auto">
    {#if $userData?.username == $page.params.username}
    <div class="profile-head mb-3">
      <h1 class="mx-2 text-2xl font-bold mt-8 mb-4 text-center">
        Edit your Profile
      </h1>

      <div class="text-center mb-6">
          <p>
            Profile Link:
            <a
              href={`/${$userData?.username}`}
              class="link link-accent"
            >
              https://linkforest.echen.io/{$userData?.username}
            </a>
          </p>
        </div>

        <div class="text-center my-4">
          <a class="btn btn-outline btn-xs" href="/login/photo">Change photo</a>
          <!-- <a class="btn btn-outline btn-xs" href={`/${$userData.username}/bio`}>Edit Bio</a> -->
        </div>

        <form class="form-control">
          <label class="label cursor-pointer flex items-start justify-center">
            <span class="label-text mr-6">
              <div
                class="tooltip group-hover:tooltip-open"
                data-tip="If public, the world can see your profile"
              >
                {$userData?.published ? "Public profile" : "Private profile"}
              </div>
            </span>
            <input
              type="checkbox"
              class="toggle toggle-success"
              checked={$userData?.published}
              on:change={toggleProfileStatus}
            />
          </label>
        </form>
      </div>

      <div class="bio mb-5 text-center">
        <p class="text-success mr-1 mb-3">Current Bio:</p>
        {#if editBio }
          <form on:submit|preventDefault={handleBioSubmit}>
            <div class="form-control">
              <textarea
                name="bio"
                class="textarea textarea-bordered border-blue-300 leading-normal py-2 input-error"
                class:textarea-error={!bioIsValid}
                class:border-error={!bioIsValid}
                rows="1"
                bind:value={bio}
              />
            </div>
            {#if bioIsValid}
              <button class="btn btn-outline btn-success btn-sm my-3">Update Bio</button>
            {:else}
              <p class="text-error text-right text-xs my-3">Bio must be less than 260 characters.</p>
            {/if}
          </form>
        {:else}
          <span class="border-solid border-2 border-blue-400 p-2 rounded-md">
            <button type="submit" on:click={toggleBio}>{!bio ? "<empty bio>" : bio}</button> 
          </span>
        {/if}
      </div>

      <!-- INSERT sortable list here -->
      <SortableList list={$userData?.links} on:sort={sortList} let:item let:index>
        <div class="group relative">
          <UserLink {...item} />
          <button
            on:click={() => deleteLink(item)}
            class="btn btn-xs btn-error invisible group-hover:visible transition-all absolute -right-6 bottom-10"
            >Delete</button
          >
        </div>
      </SortableList>

      {#if showForm}
        <form
          on:submit|preventDefault={addLink}
          class="bg-base-200 p-6 w-full mx-auto rounded-xl"
        >
          <select
            name="icon"
            class="select select-sm"
            bind:value={$formData.icon}
          >

            {#each icons as icon}
              <option value={icon.toLowerCase()}>{icon}</option>
            {/each}
          </select>
          <input
            name="title"
            type="text"
            placeholder="Title"
            class="input input-sm"
            bind:value={$formData.title}
          />
          <input
            name="url"
            type="text"
            placeholder="URL"
            class="input input-sm mt-3"
            bind:value={$formData.url}
          />
          <div class="my-4">
            {#if !titleIsValid}
              <p class="text-error text-xs">Must have valid title</p>
            {/if}
            {#if !urlIsValid}
              <p class="text-error text-xs">Must have a valid URL</p>
            {/if}
            {#if formIsValid}
              <p class="text-success text-xs">Looks good!</p>
            {/if}
          </div>
  
          <button
            disabled={!formIsValid}
            type="submit"
            class="btn btn-success block">Add Link</button
          >
  
          <button type="button" class="btn btn-xs my-4" on:click={cancelLink}>Cancel</button>
        </form>
      {:else}
        <button
          on:click={() => (showForm = true)}
          class="btn btn-outline btn-info block mx-auto my-4"
        >
          Add a Link
        </button>
      {/if}
    {/if}
  </main>
</div>