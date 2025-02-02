<script>
  import { onMount } from 'svelte';
  import { coaches } from '../data.js';
  import { lessons } from '../data.js';
  import { replays } from '../data.js';
  import ButtonBasic from '../components/ButtonBasic.svelte';
  import Lesson from '../components/Lesson.svelte';
  import Replays from '../components/Replays.svelte';
  import Coach from '../components/Coach.svelte';
  import Total from '../components/Total.svelte';

  onMount(() => {
    randomize();
  });

  let selectedCoach = {};
  let coachLesson = {};
  let replay = {};
  let selectedReplays = [];
  let countReplays;
  let discount = false;

  $: {
    countReplays = selectedReplays.length;
    countReplays > 1 ? (discount = true) : (discount = false);
  }

  function randomize() {
    let randomCoach = Math.floor(Math.random() * coaches.length);
    selectedCoach = coaches[randomCoach];
    let randomLesson = Math.floor(Math.random() * lessons.length);
    coachLesson = lessons[randomLesson];
    if (countReplays) {
      selectedReplays = selectedReplays.map(_item => getRandomReplay());
    }
  }

  function getRandomReplay() {
    let randomReplay = Math.floor(Math.random() * replays.length);
    return (replay = replays[randomReplay]);
  }

  function addReplay() {
    selectedReplays = [...selectedReplays, getRandomReplay()];
  }

  export const removeReplay = event => {
    selectedReplays = selectedReplays.filter((_item, index) => index !== event.detail.itemIndex);
  };
</script>

<div class="flex justify-center min-h-screen">
  <div
    class="w-full min-w-[350px] flex flex-col pt-7 lg:h-fit lg:w-[864px] lg:flex-row lg:flex-wrap lg:justify-between lg:pt-40 lg:pb-10"
  >
    <div class="flex justify-between items-center mx-6 mb-6 lg:w-full lg:mx-0 lg:mb-8">
      <h4 class="text-nl-0 text-xl font-semibold leading-none tracking-0.01 lg:text-1.5xl lg:leading-normal">
        Buy lesson
      </h4>
      <ButtonBasic style="px-5 lg:px-10" label="Randomize" click={randomize} />
    </div>
    <div class="flex justify-center lg:block lg:w-[498px]">
      <div class="hidden lg:block">
        <Lesson title={coachLesson.title} gamePoster={coachLesson.game_poster} />
      </div>
      <Replays count={countReplays} replays={selectedReplays} add={addReplay} remove={removeReplay} />
    </div>
    <div
      class="flex-col bg-nd-5 self-end w-full mt-auto divide-nd-2 flex rounded-t-xl lg:grow-0 lg:divide-y lg:rounded-3xl lg:self-start lg:h-fit lg:w-[302px] lg:mt-0"
    >
      <Coach avatar={selectedCoach.avatar} name={selectedCoach.name} title={selectedCoach.title} />
      <div class="lg:hidden mt-8 lg:mt-4 mx-6">
        <Lesson title={coachLesson.title} gamePoster={coachLesson.game_poster} />
      </div>
      <div class="px-6 pt-5 lg:pt-6 pb-10 lg:pb-8 flex flex-col">
        <Total count={countReplays} {discount} price={coachLesson.base_price} />
        <button
          class="text-nd-9 text-sm font-normal px-12 leading-none bg-a-5 h-10 rounded-lg grow enabled:hover:bg-a-8 disabled:bg-opacity-30 lg:h-14 lg:font-semibold lg:text-base lg:mt-2"
          disabled={!countReplays}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.nd.8);
  }
</style>
