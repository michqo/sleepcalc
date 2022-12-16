<script lang="ts">
  import Form from "./lib/Form.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<div class="flex-center flex-col min-h-screen my-16 mx-4">
  <main class="flex-center flex-col w-full max-w-sm md:max-w-md">
    <h1 class="text-3xl md:text-4xl leading-10 text-center">
      <a
        href="https://github.com/MichalUSER/sleepcalc"
        target="_vblank"
        class="underline decoration-4">Sleep Cycle Calculator</a
      >
    </h1>
    <p class="mt-1 text-slate-400">Optimize my sleep cycle</p>
    <img src="/sleep.png" alt="Sleep" class="mt-8" width="150" height="103" />
    <Form />
  </main>
  <div class="flex-1" />
  <!-- Todo: Make footer visible without scrolling -->
  <Footer />
</div>

<style>
  :global(body) {
    @apply bg-gray-900 text-slate-100;
    color-scheme: dark;
  }
</style>
