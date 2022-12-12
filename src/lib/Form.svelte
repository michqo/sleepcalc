<script lang="ts">
  import { fade } from "svelte/transition";
  import { getFallAsleep, getWakeUp } from "../utils/helper";
  import { generate, type, fallAsleep, wakeUp } from "../utils/stores";
  import ShowTimes from "./ShowTimes.svelte";

  let hour: string;
  let minute: string;

  const selectClass =
    "text-2xl font-bold rounded border-2 border-purple-600 px-3 py-2 w-1/2 bg-transparent hover:border-purple-400 focus:outline-none appearance-none";
  const buttonClass =
    "text-lg px-3 py-2 rounded-md text-black border border-black focus:ring";

  function handleClick1() {
    $type = "fallAsleep";
    $fallAsleep = getFallAsleep(hour, minute);
    $generate = true;
  }
  function handleClick2() {
    $type = "wakeUp";
    $wakeUp = getWakeUp();
    $generate = true;
  }
</script>

{#if !$generate}
  <div class="flex-center flex-col w-full mt-16" in:fade>
    <h2 class="text-2xl">Wake up at</h2>
    <div class="flex-center flex-col md:flex-row gap-x-1 w-full mt-2">
      <div class="flex-center w-full gap-x-1">
        <select class={selectClass} bind:value={hour}>
          {#each Array(24) as _, i}
            <option value={i}>
              {i}
            </option>
          {/each}
        </select>
        <p class="text-2xl">:</p>
        <select class={selectClass} bind:value={minute}>
          {#each Array(12) as _, i}
            <option value={i * 5}>
              {i * 5}
            </option>
          {/each}
        </select>
      </div>
      <p class="text-xl">am</p>
    </div>
  </div>
{:else}
  <ShowTimes />
{/if}

<div class="flex justify-center flex-wrap gap-3 my-16">
  <button
    class="{buttonClass} bg-indigo-600 focus:bg-indigo-800"
    on:click={handleClick1}>Calculate</button
  >
  <button
    class="{buttonClass} bg-emerald-600 focus:bg-emerald-800"
    on:click={handleClick2}>Sleep now</button
  >
  {#if $generate}
    <button
      class="{buttonClass} bg-indigo-600 focus:bg-indigo-800"
      on:click={() => ($generate = false)}>Check again</button
    >
  {/if}
</div>
