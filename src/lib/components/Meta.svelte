<script>
    import {page} from "$app/stores";
  export let title = "LinkForest | Tied #1 Popular Link-Sharing Site on Mars";
  export let description = "Probably someone's favorite link-sharing site, with a 95% 5-star rating by people who rated it 5 stars.";
  export let imageUrl = "/demo.png";
  export let twitterCard = "summary_large_image"; // Twitter card type (default: summary_large_image)
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