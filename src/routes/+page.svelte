<script>

  import Navbar from "$lib/components/Navbar.svelte";
  import { userData } from "$lib/firebase";


  </script>
  <div id="navbar">
  <Navbar username="/" isUser={false}/>
  </div>
  <main id="home" class="flex w-full min-h-screen bg-[url('/forest.svg')]">
    <div class="hero backdrop-blur-sm">
      <div class="hero-content text-center">
        <div class="w-full">
          <h1 class="text-7xl font-bold">LinkForest</h1>
          <p class="py-6 text-2xl">An innovative link-sharing website that was definitely my idea.</p>
          {#if $userData?.username}
            <a href="/{$userData.username}/edit" class="btn bg-blue-400 text-white hover:bg-blue-500">Edit Profile</a>
          {:else}
            <a href="/login" class="btn bg-blue-400 text-white hover:bg-blue-500">Get Started</a>
            <a href="/belowocean" class="btn btn-neutral text-white">Example Profile</a>
          {/if}
          <p class="py-6">A slight modification of the code from <a class="link" href="https://github.com/fireship-io/fkit-course">Fireship's SvelteKit Course</a></p>
        </div>
      </div>
    </div>
  </main>

<style>
#home {
    background-size: cover;
}
#navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999
}

.hero h1 {
    color: #c6e2ff;
    animation: neon 1s ease-in-out infinite alternate;
}

.hero p {
    color: rgb(177, 215, 255);
}

/*-- Animation Keyframes --*/

@keyframes neon {
  from {
    text-shadow:
    0 0 6px rgba(202,228,225,0.92),
    0 0 30px rgba(202,228,225,0.34),
    0 0 12px rgba(30,132,242,0.52),
    0 0 21px rgba(30,132,242,0.92),
    0 0 34px rgba(30,132,242,0.78),
    0 0 54px rgba(30,132,242,0.92);
  }
  to {
    text-shadow:
    0 0 6px rgba(202,228,225,0.98),
    0 0 30px rgba(202,228,225,0.42),
    0 0 12px rgba(30,132,242,0.58),
    0 0 22px rgba(30,132,242,0.84),
    0 0 38px rgba(30,132,242,0.88),
    0 0 60px rgba(30,132,242,1);
  }
}
</style>