<script>
    import { page } from '$app/stores';
    import Navbar from '$lib/components/Navbar.svelte';
</script>
  
<Navbar username="/" isUser={false}/>
<div class="w-full pt-12 mx-auto">
    <main class="prose text-center mx-auto">
        <h1 class="text-7xl text-error font-bold mb-3">
            {$page.status} Error
        </h1>
        <p class="text-xl font-bold mb-8">{$page.error?.message || "Willy Wonka!"}</p>

        <img class="mx-auto my-5 rounded-lg" alt="error" src="/error.webp" />
    </main>
</div>