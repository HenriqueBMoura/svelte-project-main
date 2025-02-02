<script>
  export let gamePoster;
  export let title;
</script>

<div class="flex items-start">
  <img
    src={gamePoster}
    alt="lesson thumbnail"
    class=" h-12 w-12 lg:h-[90px] lg:w-[90px] rounded-lg lg:rounded-[20px]"
  />
  <div class="ml-4 lg:ml-5 flex-column">
    <div class="flex items-center pt-[2px] lg:pt-[19px]">
      <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
        <path
          d="M0.5 11.8201V2.17994C0.5 1.24813 1.5385 0.692337 2.31382 1.20921L9.54391 6.02927C10.2366 6.49107 10.2366 7.50893 9.54391 7.97073L2.31382 12.7908C1.5385 13.3077 0.5 12.7519 0.5 11.8201Z"
          stroke="#77748C"
          stroke-width="0.996021"
        />
      </svg>
      <span class="text-nl-2 text-sm font-semibold uppercase leading-none tracking-0.08">replay review</span>
    </div>
    <p class="text-nl-0 text-base font-semibold leading-[140%] pt-3 lg:text-xl lg:leading-120">{title}</p>
  </div>
</div>
