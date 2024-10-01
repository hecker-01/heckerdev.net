<script>
  import Step from "./Step.svelte";

  let steps = [
    {
      name: "Hecker's Homes",
      icon: "fa-solid fa-house",
      href: "https://github.com/hecker-01/heckershomes",
    },
    {
      name: "Hecker's Utils",
      icon: "fa-solid fa-screwdriver-wrench",
      href: "https://github.com/hecker-01/heckersutils",
    },
    {
      name: "Soon...",
      icon: "fa-solid fa-question",
    },
  ];

  let yearsProgrammed = new Date().getFullYear() - 2020;

  let benefits = [
    {
      name: "a self taught developer",
      description: `I taught myself to code using free online resources and have been coding for over ${yearsProgrammed} years now. I have a passion for learning and am always looking for new ways to improve my skills.`,
    },
    {
      name: "a flexible developer",
      description:
        "I am comfortable working with a variety of languages and API's. I have experience with Java and am currently learning Kotlin. I am always looking to expand my skill set and learn new things.",
    },
    {
      name: "an excellent communicator",
      description:
        "Communication is key in any project. I am a great listener, able to clearly communicate my ideas and thoughts about the project and always open to feedback.",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 sm:px-16"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <a
          class="poppins text-purple-500 underline"
          href="https://github.com/hecker-01"
          target="_blank">HeckerDev</a
        >,
        <br />a <span class="poppins text-purple-500">Java</span> Developer.
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        I code <span class="text-purple-500">Minecraft Plugins & Mods</span>
        and <span class="text-purple-500">Discord Bots</span>. I also have
        <br />
        experience with
        <span class="text-purple-500">HTML, CSS & JavaScript</span> and much more!
      </p>
      <a
        href="/contact"
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 hover:bg-purple-600 hover:text-white duration-200"
      >
        Get in touch &rarr;
      </a>
    </div>
    <div class="relative shadow-2xl grid justify-end">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={"images/profile.png"}
        alt="Profile Picture"
        class="object-cover z-[2] max-h-[45vh] rounded-full"
        draggable="false"
      />
    </div>
  </section>
  <section class="py-20 lg:py-20 flex flex-col gap-24" id="projects">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">A few of my projects.</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-purple-500">see</span> my work?
      </h3>
    </div>
    <a
      href="https://github.com/Hecker-01?tab=repositories"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-purple-700 duration-200"
    >
      <i class="fa-brands fa-github" />
      <p>Check it out on Github</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          Hecker's Homes is a <strong class="text-purple-500">Plugin</strong> I
          made for <strong class="text-purple-500">Minecraft</strong> that
          allows players to create and manage their<br /> own
          <strong class="text-purple-500">homes</strong>.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Hecker's Utils is a <strong class="text-purple-500">Plugin</strong> I
          made for <strong class="text-purple-500">Minecraft</strong> that
          allows administrators to use a variety of
          <strong class="text-purple-500">commands</strong> to make their lives easier.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          <strong>Coming soon...</strong><br />
          I'm always working on
          <strong class="text-purple-500">new and exciting</strong> projects. Keep
          an eye out for my next big project!
        </p>
      </Step>
    </div>
  </section>
  <section
    id="about"
    class="py-10 pt-10 lg:pt-16 lg:py-20 flex flex-col gap-16 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-purple-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-purple-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-purple-500">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
