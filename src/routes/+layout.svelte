<script lang="ts">
    import { user, userData } from "$lib/firebase";
    import { page } from "$app/stores";
    import "../app.css";
    // import type { LayoutData } from "./$types";

    // export let data: LayoutData; 
     
    $user;
    $userData; 

    let title = $page.data.title;
    let description = $page.data.description;
    let imageUrl = $page.data.imageUrl;
    let twitterCard = $page.data.twitterCard;

 </script>
 
 <svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    
    <!-- OpenGraph (OG) metadata --> 
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:url" content={$page.url.pathname} />
    
    <!-- Twitter metadata --> 
    <meta name="twitter:card" content={twitterCard} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
</svelte:head>

<div class="min-h-screen flex flex-col">
    
    <slot />
</div>