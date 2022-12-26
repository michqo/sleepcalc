<script lang="ts">
  import { onMount } from "svelte";
  import { christmas } from "./utils/stores";
  import Form from "./lib/Form.svelte";
  import Footer from "./lib/Footer.svelte";
  import Background from "./lib/Background.svelte";

  onMount(() => {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    if (month == 11 || (month == 0 && day <= 6)) {
      $christmas = true;
    }
  });
</script>

{#if $christmas}
  <Background />
{/if}
<article class="flex-center flex-col min-h-full my-16 mx-4">
  <main class="flex-center flex-col max-w-sm md:max-w-md">
    <h1 class="text-3xl md:text-4xl leading-10 text-center">
      <a
        href="https://github.com/MichalUSER/sleepcalc"
        target="_vblank"
        class="underline decoration-4">Sleep Cycle Calculator</a
      >
    </h1>
    <p class="mt-1 text-slate-400 {$christmas ? 'text-slate-200' : ''}">
      Optimize my sleep cycle
    </p>
    <img src="/sleep.png" alt="Sleep" class="mt-8" width="150" height="103" />
    <Form />
  </main>
  <div class="flex-1" />
  <Footer />
</article>

<style>
  :global(body) {
    @apply bg-gray-900 text-slate-100;
    color-scheme: dark;
  }
</style>
