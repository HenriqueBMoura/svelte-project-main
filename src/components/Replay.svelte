<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let title;
  export let thumbnail;
  export let tags;
  export let index;

  const removeItem = index => {
    dispatch('message', {
      itemIndex: index,
    });
  };
</script>

<div class="bg-nd-2 mt-3 pl-4 lg:pl-3 py-3 rounded-lg flex items-start pr-2 lg:pr-3">
  <img src={thumbnail} alt="replay thumbnail" class="h-12 w-[85px] rounded-md" />
  <div class="ml-4 flex-auto">
    <p class="text-white text-sm font-normal leading-[110%] mt-1">{title}</p>
    <p class="text-nl-2 text-sm font-normal mt-[6px] leading-normal">
      {#each tags as tag, i}
        <span>{tag}</span>
        {#if i!==tags.length-1}
        <span class="ml-1 mr-2">&#8226</span>
        {/if}
      {/each}
    </p>
  </div>
  <div class="h-12 flex items-center">
    <button aria-label="delete" class="h-8 w-8 flex items-center justify-center hover:bg-nd-5 rounded-lg" on:click={() => removeItem(index)}>
      <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.82349 3.56343L4.82349 2.09283C4.82349 1.44308 5.35021 0.916351 5.99996 0.916351C6.64971 0.916351 7.17644 1.44308 7.17644 2.09283V3.56343"
          stroke="#77748C"
          stroke-width="1.17648"
        />
        <path
          d="M1.23765 5.09521C1.04985 4.35197 1.61167 3.63052 2.37828 3.63052H9.62177C10.3884 3.63052 10.9502 4.35197 10.7624 5.09521L9.13655 11.5297C8.92662 12.3605 8.17917 12.9426 7.32222 12.9426H4.67783C3.82088 12.9426 3.07343 12.3605 2.8635 11.5297L1.23765 5.09521Z"
          stroke="#77748C"
          stroke-width="1.0145"
        />
        <title>Delete</title>
      </svg>
    </button>
  </div>
</div>
