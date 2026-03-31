<script>
  export let y;

  export let tabs = [
    { name: "Projects ", link: "/projects" },
    { name: "About me", link: "/#about" },
    { name: "Contact", link: "/contact" },
    { name: "Quoter", link: "/quoter" },
  ];
</script>

<div
  class={"banner-outdated sticky top-0 z-[11] w-full overflow-hidden duration-200 " +
    (y > 0 ? "max-h-0" : "max-h-12")}
>
  <div class="banner-bg absolute inset-0"></div>
  <div
    class="relative flex items-center justify-center gap-3 py-3 px-6 whitespace-nowrap"
  >
    <span class="relative flex h-2.5 w-2.5 shrink-0">
      <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-75"
      ></span>
      <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-400"
      ></span>
    </span>
    <p class="text-sm sm:text-base text-slate-200 tracking-wide">
      This site is no longer maintained! &dash;
      <a
        target="_blank"
        href="https://heckr.dev"
        class="inline-flex items-center gap-1 font-semibold text-white underline decoration-purple-400 decoration-2 underline-offset-4 hover:decoration-white duration-300"
      >
        visit heckr.dev
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 transition-transform duration-300 group-arrow"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </p>
  </div>
</div>
<header
  class={"sticky z-[10] duration-200 px-6 flex items-center justify-between border-b border-solid " +
    (y > 0
      ? " top-0 py-4 bg-slate-950 border-violet-950"
      : " top-[46px] py-6 bg-transparent border-transparent")}
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

<style>
  .banner-bg {
    background: linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #1e1b4b 100%);
    background-size: 200% 200%;
    animation: gradientShift 6s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .banner-outdated::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(167, 139, 250, 0.5),
      transparent
    );
  }

  .banner-outdated a:hover svg {
    transform: translateX(3px);
  }
</style>
