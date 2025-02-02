<script>
  export let label;
  export let style;
  export let click;
</script>

<button class="text-nl-0 text-sm font-normal leading-[110%] h-10 bg-nd-2 rounded-lg hover:bg-nd-5 {style}" on:click={click}>
  {label}
</button>
