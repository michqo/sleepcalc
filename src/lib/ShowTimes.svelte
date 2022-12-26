<script lang="ts">
  import { fade } from "svelte/transition";
  import {
    type,
    hour,
    minute,
    fallAsleep,
    wakeUp,
    christmas,
  } from "../utils/stores";
  import TimeText from "./TimeText.svelte";

  const textClass = "mt-12 mb-4 text-lg";
  const christmasClass = "bg-black/[.4] border border-slate-500";
</script>

{#if $type == "fallAsleep"}
  <p class={textClass}>
    To wake up at <span class="font-bold">{$hour}:{$minute}</span> try to fall asleep
    at one of the following times:
  </p>
{:else}
  <p class={textClass}>
    If you go to bed right now, try to wake up at one of the following times:
  </p>
{/if}

<div
  class="px-3 py-4 w-full flex-center flex-col drop-shadow-xl rounded-lg {$christmas
    ? `${christmasClass}`
    : 'bg-gray-700'}"
  in:fade={{ duration: 120 }}
>
  <div>
    {#if $type == "fallAsleep"}
      {#each $fallAsleep as { time, cycles, hours }, i}
        <TimeText {i} {time} {cycles} {hours} />
      {/each}
    {:else}
      {#each $wakeUp as { time, cycles, hours }, i}
        <TimeText {i} {time} {cycles} {hours} />
      {/each}
    {/if}
  </div>
</div>

<p class="italic mt-4">
  Please keep in mind that the average human takes fourteen minutes to fall
  asleep.
</p>
