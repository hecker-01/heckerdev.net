<script>
  import "../../app.css";
  let y;
  let innerWidth = 0;
  let innerHeight = 0;

  function goTop() {
    document.body.scrollIntoView();
  }
</script>

<div
  class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <slot />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
