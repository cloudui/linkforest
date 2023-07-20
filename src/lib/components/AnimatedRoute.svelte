<script>
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";
</script>

{#key $page.url}
<div>
    <div in:fly={{ x: '-100%', duration: 500 }}>
        <slot />
    </div>
</div>
{/key}