<script>
  export let count;
  export let discount;
  export let price;
</script>

{#if count}
  <div class="flex justify-between items-baseline">
    <div class="mb-5 mt-1 lg:mb-2 lg:mt-0">
      <span class="text-nl-2 text-sm font-semibold uppercase leading-none tracking-0.08 hidden lg:block">subtotal</span>
      <div class="flex items-baseline">
        {#if !discount}
          <span
            class="text-nl-0 text-[32px] font-semibold leading-[140%] tracking-0.01 ml-1 lg:leading-120 lg:text-3.5xl lg:mt-4 lg:ml-0"
          >
            ${price * count}
          </span>
        {:else}
          <span
            class="text-nl-0 text-[32px] font-semibold leading-[140%] tracking-0.01 ml-1 lg:leading-120 lg:text-3.5xl lg:mt-4 lg:ml-0"
          >
            ${Math.ceil(price * count * 0.9)}
          </span>
          <span class="text-nl-2 text-base font-normal leading-120 tracking-0.01 line-through ml-3 lg:text-xl">
            ${price * count}
          </span>
        {/if}
      </div>
    </div>
    <div class="flex items-end lg:items-start">
      <span class="text-a-5 text-sm font-semibold uppercase leading-none tracking-0.08">
        {count > 1 ? count + ' replays' : count + ' replay'}
      </span>
    </div>
  </div>
{/if}
