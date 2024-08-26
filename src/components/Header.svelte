<script>
  export let y;

  export let tabs = [
    { name: "Projects ", link: "/#projects" },
    { name: "About me", link: "/#about" },
    { name: "Contact", link: "/contact" },
  ];
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
    (y > 0
      ? " py-4 bg-slate-950 border-violet-950"
      : " py-6 bg-transparent border-transparent")}
>
  <h1 class="font-medium">
    <a href="/" class="text-lg font-bold poppins">HeckerDev.net</a>
  </h1>
  <div class="sm:flex items-center gap-4 hidden">
    {#each tabs as tab, index}
      <a href={tab.link} class="duration-200 hover:text-purple-400">
        <p>{tab.name}</p>
      </a>
    {/each}
    <a
      href="/login"
      class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-purple-700 text-white hover:bg-purple-600 duration-200"
      >Login</a
    >
  </div>
</header>
