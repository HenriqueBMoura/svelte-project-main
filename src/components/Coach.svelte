<script>
  export let avatar;
  export let name;
  export let title;
</script>

<div class="lg:flex items-start p-6 hidden">
  <img src={avatar} alt="coach avatar" class="h-14 w-14 rounded-xl" />
  <div class="ml-4">
    <p class="text-nl-0 text-xl font-semibold leading-120 tracking-0.01 mt-1">{name}</p>
    <p class="text-nl-2 text-sm font-normal leading-120 tracking-0.01 mt-2">{title}</p>
  </div>
</div>
