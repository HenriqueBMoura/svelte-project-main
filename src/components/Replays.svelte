<script>
  import Replay from '../components/Replay.svelte';
  import ButtonBasic from '../components/ButtonBasic.svelte';

  export let count;
  export let replays;
  export let add;
  export let remove;
</script>

<div
  class="rounded-3xl flex flex-col mb-4 mx-6 border-nd-2 w-full max-w-2xl {!count
    ? 'border'
    : 'border-0'} lg:border lg:mb-0 lg:mt-16 lg:p-5 lg:mx-0"
>
  {#if !count}
    <div class="px-6 pt-8 pb-14 lg:px-5 lg:pt-[23px] lg:pb-3">
      <h5 class="text-nl-0 text-base font-semibold leading-normal tracking-0.01">Add some replays for review!</h5>
      <p class="text-nl-2 text-sm font-normal leading-[150%] pt-4">
        Choose video files to send to your coach for review! They'll be able to add comments and drawings at specific
        times.
      </p>
      <ButtonBasic style="px-10 mt-4" label="Add replay" click={add} />
    </div>
  {:else}
    <p class="text-nl-0 text-base font-normal leading-[150%] mb-2 lg:mb-1">
      Replays <span class="text-nl-2">({count})</span>
    </p>
    {#each replays as replay, i}
      <Replay title={replay.title} thumbnail={replay.thumbnail} tags={replay.tags} index={i} on:message={remove} />
    {/each}
    <ButtonBasic style="px-10 mt-4 lg:mt-5 grow" label="+ Add more replays" click={add} />
  {/if}
</div>
