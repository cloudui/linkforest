<script lang="ts">
    import type { LayoutData } from './$types';
    import Navbar from '$lib/components/Navbar.svelte';

    import { userData } from '$lib/firebase';

    export let data: LayoutData;
</script>

<div class="user-content">
    <Navbar username={data.username} isUser={data.username === $userData?.username}/>
    <slot></slot>
</div>