<script lang="ts">
  export let i: number;
  export let time: string;
  export let cycles: number;
  export let hours: number;
</script>

<p class="my-4 md:my-5 tracking-wide">
  <span class="mr-3 font-light text-2xl">{i + 1}</span>
  <span class="font-extrabold text-2xl md:text-xl text-indigo-300">{time}</span>
  for
  <span class="font-bold">{cycles}</span> cycles -
  <span class="font-bold">{hours}</span> hours of sleep
</p>
