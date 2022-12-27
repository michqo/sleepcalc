<script lang="ts">
  import { fade } from "svelte/transition";
  import { getFallAsleep, getWakeUp } from "../utils/helper";
  import {
    generate,
    type,
    hour,
    minute,
    fallAsleep,
    wakeUp,
    christmas,
  } from "../utils/stores";
  import ShowTimes from "./ShowTimes.svelte";

  const hourArray = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24,
  ];
  const minuteArray = ["00", "05", 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  let selectClass =
    "text-2xl font-bold rounded border-2 border-purple-600 px-3 py-2 w-1/2 bg-transparent hover:border-purple-400 focus:outline-none appearance-none";
  const christmasSelectClass = "border-purple-300 hover:border-purple-200";
  const optionClass = "bg-gray-800";
  const buttonClass =
    "text-lg px-3 py-2 rounded-md text-slate-100 bg-white/[.08] border border-accent focus:ring";

  function handleClick1() {
    $type = "fallAsleep";
    $fallAsleep = getFallAsleep($hour, $minute);
    $generate = true;
  }
  function handleClick2() {
    $type = "wakeUp";
    $wakeUp = getWakeUp();
    $generate = true;
  }
</script>

{#if !$generate}
  <div
    class="flex items-center flex-col w-full mt-16"
    in:fade={{ duration: 120 }}
  >
    <h2 class="text-2xl">Wake up at</h2>
    <div class="flex-center gap-x-1 w-full mt-2">
      <select
        class="{selectClass} {$christmas ? `${christmasSelectClass}` : ''}"
        bind:value={$hour}
      >
        {#each hourArray as i}
          <option class={optionClass}>{i}</option>
        {/each}
      </select>
      <p class="text-2xl">:</p>
      <select
        class="{selectClass} {$christmas ? `${christmasSelectClass}` : ''}"
        bind:value={$minute}
      >
        {#each minuteArray as i}
          <option class={optionClass}>{i}</option>
        {/each}
      </select>
    </div>
  </div>
{:else}
  <ShowTimes />
{/if}

<div class="flex justify-center flex-wrap gap-3 my-16">
  <button class={buttonClass} on:click={handleClick1}>Calculate</button>
  <button class={buttonClass} on:click={handleClick2}>Sleep now</button>
  {#if $generate}
    <button class={buttonClass} on:click={() => ($generate = false)}
      >Check again</button
    >
  {/if}
</div>
