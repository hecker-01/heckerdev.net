<script>
  import Step from "./Step.svelte";

  // JSON object containing all projects
  let projects = [
    {
      name: "Hecker's Utils",
      icon: "fa-solid fa-screwdriver-wrench",
      href: "https://github.com/hecker-01/heckersutils",
      description:
        "A powerful Minecraft plugin that provides administrators with a variety of commands to make server management easier.",
      technologies: ["Java", "Paper API", "Minecraft"],
      status: "completed",
    },
    {
      name: "Quoter Bot",
      icon: "fa-solid fa-quote-left",
      href: "/quoter",
      description:
        "A Discord User Bot that allows users to quote messages from other members and convert them into beautiful images. Simple, fast, and easy to use.",
      technologies: ["JavaScript", "Discord.js", "Node.js"],
      status: "completed",
    },
    {
      name: "Portfolio Website",
      icon: "fa-solid fa-globe",
      href: "https://github.com/Hecker-01/heckerdev.net",
      description:
        "A modern, responsive portfolio website built with SvelteKit and TailwindCSS. Features a clean design, smooth animations, and optimized performance.",
      technologies: ["SvelteKit", "TailwindCSS", "JavaScript", "Node.js"],
      status: "completed",
    },
    {
      name: "Hecker's Homes",
      icon: "fa-solid fa-home",
      href: "https://github.com/Hecker-01/HeckersHomes",
      description:
        "A Minecraft plugin that allows players to set and teleport to multiple homes. Features include home limits, cross-world support.",
      technologies: [
        "Java",
        "Paper API",
        "Custom Storage Solution",
        "Minecraft",
      ],
      status: "completed",
    },
    {
      name: "Muddles Bot",
      icon: "fa-solid fa-robot",
      href: "https://github.com/Hecker-01/Muddles-Bot",
      description:
        "Discord bot I made for a friend's server that offers a variety of fun and useful commands.",
      technologies: ["JavaScript", "Discord.js", "Node.js"],
      status: "completed",
    },
    {
      name: "SecretLife",
      icon: "fa-solid fa-heartbeat",
      href: "https://github.com/Hecker-01/SecretLife",
      description:
        "A Minecraft plugin based on the series 'SecretLife' from Grian on YouTube.",
      technologies: ["Java", "Paper API", "Minecraft"],
      status: "completed",
    },
    {
      name: "Warp Plugin",
      icon: "fa-solid fa-location-arrow",
      href: "https://github.com/Hecker-01/WarpPlugin",
      description:
        "Basically a copy of MariaDB-Warp-Plugin, but is more optimized, has more features, and is more user-friendly by being able to configure a lot of things in the config.yml file.",
      technologies: ["Java", "Paper API", "Minecraft", "mySQL"],
      status: "completed",
    },
    {
      name: "MCBE_Pack_Decryptor",
      icon: "fa-solid fa-lock-open",
      href: "https://github.com/Hecker-01/MCBE_Pack_Decryptor",
      description:
        "A Python CLI that decrypts encrypted Minecraft marketplace packs.",
      technologies: ["Python", "CLI", "Minecraft", "Encryption"],
      status: "completed",
    },
    {
      name: "MangaHD",
      icon: "fa-solid fa-book",
      href: "https://github.com/hecker-01/MangaHD",
      description:
        "A modern, responsive manga and webtoon reader built with React, TailwindCSS, and Next.js.",
      technologies: [
        "React",
        "TailwindCSS",
        "TypeScript",
        "Next.js",
        "Node.js",
        "MySQL",
      ],
      status: "in-progress",
    },
    {
      name: "Guides",
      icon: "fa-solid fa-bookmark",
      href: "https://guides.heckerdev.net/",
      description:
        "A collection of guides and tutorials for various topics related to software development.",
      technologies: ["GitBook", "Markdown"],
      status: "in-progress",
    },
    {
      name: "dummy",
      icon: "fa-solid fa-question",
      href: "https://github.com/hecker-01",
      description: "",
      technologies: [],
      status: "planned",
    },
  ];

  // Technology filter state
  let selectedTechnology = "All";

  // Get all unique technologies
  $: allTechnologies = [
    "All",
    ...new Set(projects.flatMap((project) => project.technologies)),
  ].sort();

  // Filter projects by technology
  $: filteredProjects =
    selectedTechnology === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedTechnology)
        );

  // Filter projects by status (using filtered projects)
  $: featuredProjects = filteredProjects.filter((project) => project.featured);
  $: completedProjects = filteredProjects.filter(
    (project) => project.status === "completed"
  );
  $: inProgressProjects = filteredProjects.filter(
    (project) => project.status === "in-progress"
  );
  $: plannedProjects = filteredProjects.filter(
    (project) => project.status === "planned"
  );

  // Get status color
  function getStatusColor(status) {
    switch (status) {
      case "completed":
        return "text-green-500";
      case "in-progress":
        return "text-yellow-500";
      case "planned":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  }

  function getStatusIcon(status) {
    switch (status) {
      case "completed":
        return "fa-solid fa-check-circle";
      case "in-progress":
        return "fa-solid fa-clock";
      case "planned":
        return "fa-solid fa-lightbulb";
      default:
        return "fa-solid fa-question-circle";
    }
  }
</script>

<svelte:head>
  <title>Projects • HeckerDev.net</title>
</svelte:head>

<main class="flex flex-col flex-1 p-4">
  <!-- Hero Section -->
  <section class="py-16 sm:py-20 flex flex-col gap-8 text-center">
    <div class="flex flex-col gap-4">
      <h1 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        My <span class="poppins text-purple-500">Projects</span>
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        A collection of projects I've worked on, ranging from Minecraft plugins
        to Discord bots and web applications. Each project represents a journey
        of learning and problem-solving.
      </p>
    </div>

    <a
      href="https://github.com/Hecker-01?tab=repositories"
      target="_blank"
      class="mx-auto px-6 py-3 rounded-md border border-solid border-white flex items-center gap-2 hover:border-purple-700 duration-200"
    >
      <i class="fa-brands fa-github" />
      <p>View all on GitHub</p>
    </a>
  </section>

  <!-- Technology Filter -->
  <section class="py-8 flex flex-col gap-6">
    <div class="text-center">
      <h3 class="font-semibold text-xl sm:text-2xl mb-4">
        Filter by <span class="poppins text-purple-500">Technology</span>
      </h3>
    </div>

    <div class="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
      {#each allTechnologies as tech}
        <button
          class="px-4 py-2 rounded-full border transition-all duration-200 {selectedTechnology ===
          tech
            ? 'bg-purple-600 border-purple-600 text-white'
            : 'border-purple-600/50 text-purple-300 hover:border-purple-600 hover:bg-purple-600/20'}"
          on:click={() => (selectedTechnology = tech)}
        >
          {tech}
          {#if tech !== "All"}
            <span class="ml-2 text-xs opacity-70">
              ({projects.filter((p) => p.technologies.includes(tech)).length})
            </span>
          {/if}
        </button>
      {/each}
    </div>

    {#if selectedTechnology !== "All"}
      <div class="text-center">
        <p class="text-gray-400">
          Showing {filteredProjects.length} project{filteredProjects.length !==
          1
            ? "s"
            : ""}
          using
          <span class="text-purple-400 font-semibold">{selectedTechnology}</span
          >
        </p>
      </div>
    {/if}
  </section>

  <!-- Unified Projects Grid (when filtering) -->
  {#if selectedTechnology !== "All" && filteredProjects.length > 0}
    <section class="py-16 flex flex-col gap-12">
      <div class="text-center">
        <h2 class="font-semibold text-3xl sm:text-4xl md:text-5xl mb-4">
          Projects with <span class="poppins text-purple-500"
            >{selectedTechnology}</span
          >
        </h2>
        <p class="text-gray-400 text-lg">
          {filteredProjects.length} project{filteredProjects.length !== 1
            ? "s"
            : ""} found
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredProjects as project}
          <div
            class="p-6 rounded-lg border border-solid border-violet-700 hover:border-violet-400 duration-200"
          >
            <div class="flex items-start gap-4 mb-4">
              <div class="bg-slate-950 p-3 rounded-lg">
                <i class="{project.icon} text-2xl text-purple-500"></i>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-xl mb-2">{project.name}</h4>
                <div class="flex items-center gap-2 mb-2">
                  <i
                    class="{getStatusIcon(project.status)} {getStatusColor(
                      project.status
                    )}"
                  ></i>
                  <span
                    class="text-sm {getStatusColor(project.status)} capitalize"
                    >{project.status}</span
                  >
                </div>
              </div>
            </div>

            <p class="text-gray-300 mb-4 text-sm">{project.description}</p>

            <div class="flex flex-wrap gap-1 mb-4">
              {#each project.technologies as tech}
                <button
                  class="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs hover:bg-purple-600/40 transition-colors duration-200"
                  on:click={() => (selectedTechnology = tech)}
                >
                  {tech}
                </button>
              {/each}
            </div>

            {#if project.href}
              <a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 duration-200"
              >
                <span>View Project</span>
                <i class="fa-solid fa-external-link text-sm"></i>
              </a>
            {/if}
          </div>
        {/each}
      </div>
    </section>
  {/if}

  <!-- Default Sectioned Layout (when showing all) -->
  {#if selectedTechnology === "All"}
    <!-- Featured Projects -->
    {#if featuredProjects.length > 0}
      <section class="py-16 flex flex-col gap-12">
        <div class="text-center">
          <h2 class="font-semibold text-3xl sm:text-4xl md:text-5xl mb-4">
            Featured <span class="poppins text-purple-500">Projects</span>
          </h2>
          <p class="text-gray-400 text-lg">
            My most significant and impactful work
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {#each featuredProjects as project}
            <Step step={project}>
              <p class="text-gray-300 mb-4">{project.description}</p>

              <div class="flex flex-wrap gap-2 mb-4">
                {#each project.technologies as tech}
                  <button
                    class="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-sm hover:bg-purple-600/40 transition-colors duration-200"
                    on:click={() => (selectedTechnology = tech)}
                  >
                    {tech}
                  </button>
                {/each}
              </div>

              <div class="flex items-center gap-2 justify-center">
                <i
                  class="{getStatusIcon(project.status)} {getStatusColor(
                    project.status
                  )}"
                ></i>
                <span
                  class="text-sm {getStatusColor(project.status)} capitalize"
                  >{project.status}</span
                >
              </div>
            </Step>
          {/each}
        </div>
      </section>
    {/if}

    <!-- No Results Message -->
    {#if filteredProjects.length === 0}
      <section class="py-16 text-center">
        <div class="max-w-md mx-auto">
          <i class="fa-solid fa-search text-4xl text-gray-500 mb-4"></i>
          <h3 class="font-semibold text-2xl mb-4">No Projects Found</h3>
          <p class="text-gray-400 mb-6">
            No projects found using <span class="text-purple-400 font-semibold"
              >{selectedTechnology}</span
            >. Try selecting a different technology or view all projects.
          </p>
          <button
            class="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-200"
            on:click={() => (selectedTechnology = "All")}
          >
            View All Projects
          </button>
        </div>
      </section>
    {/if}

    <!-- All Projects by Status -->
    <section class="py-16 flex flex-col gap-16">
      <!-- Completed Projects -->
      {#if completedProjects.length > 0}
        <div class="flex flex-col gap-8">
          <div class="text-center">
            <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl mb-2">
              <span class="poppins text-green-500">Completed</span> Projects
            </h3>
            <p class="text-gray-400">
              Projects that are finished and ready to use
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each completedProjects as project}
              <div
                class="p-6 rounded-lg border border-solid border-green-700/30 bg-green-900/10 hover:border-green-500/50 duration-200"
              >
                <div class="flex items-start gap-4 mb-4">
                  <div class="bg-slate-950 p-3 rounded-lg">
                    <i class="{project.icon} text-2xl text-green-500"></i>
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-xl mb-2">{project.name}</h4>
                    <div class="flex items-center gap-2 mb-2">
                      <i class="fa-solid fa-check-circle text-green-500"></i>
                      <span class="text-green-500 text-sm">Completed</span>
                    </div>
                  </div>
                </div>

                <p class="text-gray-300 mb-4 text-sm">{project.description}</p>

                <div class="flex flex-wrap gap-1 mb-4">
                  {#each project.technologies as tech}
                    <button
                      class="px-2 py-1 bg-green-600/20 text-green-300 rounded text-xs hover:bg-green-600/40 transition-colors duration-200"
                      on:click={() => (selectedTechnology = tech)}
                    >
                      {tech}
                    </button>
                  {/each}
                </div>

                {#if project.href}
                  <a
                    href={project.href}
                    target={project.href.startsWith("http")
                      ? "_blank"
                      : undefined}
                    class="inline-flex items-center gap-2 text-green-400 hover:text-green-300 duration-200"
                  >
                    <span>View Project</span>
                    <i class="fa-solid fa-external-link text-sm"></i>
                  </a>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <!-- In Progress Projects -->
      {#if inProgressProjects.length > 0}
        <div class="flex flex-col gap-8">
          <div class="text-center">
            <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl mb-2">
              <span class="poppins text-yellow-500">In Progress</span> Projects
            </h3>
            <p class="text-gray-400">
              Projects currently under active development
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each inProgressProjects as project}
              <div
                class="p-6 rounded-lg border border-solid border-yellow-700/30 bg-yellow-900/10 hover:border-yellow-500/50 duration-200"
              >
                <div class="flex items-start gap-4 mb-4">
                  <div class="bg-slate-950 p-3 rounded-lg">
                    <i class="{project.icon} text-2xl text-yellow-500"></i>
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-xl mb-2">{project.name}</h4>
                    <div class="flex items-center gap-2 mb-2">
                      <i class="fa-solid fa-clock text-yellow-500"></i>
                      <span class="text-yellow-500 text-sm">In Progress</span>
                    </div>
                  </div>
                </div>

                <p class="text-gray-300 mb-4 text-sm">{project.description}</p>

                <div class="flex flex-wrap gap-1 mb-4">
                  {#each project.technologies as tech}
                    <button
                      class="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded text-xs hover:bg-yellow-600/40 transition-colors duration-200"
                      on:click={() => (selectedTechnology = tech)}
                    >
                      {tech}
                    </button>
                  {/each}
                </div>

                {#if project.href}
                  <a
                    href={project.href}
                    target={project.href.startsWith("http")
                      ? "_blank"
                      : undefined}
                    class="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 duration-200"
                  >
                    <span>View Progress</span>
                    <i class="fa-solid fa-external-link text-sm"></i>
                  </a>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Planned Projects -->
      {#if plannedProjects.length > 0}
        <div class="flex flex-col gap-8">
          <div class="text-center">
            <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl mb-2">
              <span class="poppins text-blue-500">Planned</span> Projects
            </h3>
            <p class="text-gray-400">
              Exciting ideas and concepts for future development
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each plannedProjects as project}
              <div
                class="p-6 rounded-lg border border-solid border-blue-700/30 bg-blue-900/10 hover:border-blue-500/50 duration-200"
              >
                <div class="flex items-start gap-4 mb-4">
                  <div class="bg-slate-950 p-3 rounded-lg">
                    <i class="{project.icon} text-2xl text-blue-500"></i>
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-xl mb-2">{project.name}</h4>
                    <div class="flex items-center gap-2 mb-2">
                      <i class="fa-solid fa-lightbulb text-blue-500"></i>
                      <span class="text-blue-500 text-sm">Planned</span>
                    </div>
                  </div>
                </div>

                <p class="text-gray-300 mb-4 text-sm">{project.description}</p>

                <div class="flex flex-wrap gap-1 mb-4">
                  {#each project.technologies as tech}
                    <button
                      class="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs hover:bg-blue-600/40 transition-colors duration-200"
                      on:click={() => (selectedTechnology = tech)}
                    >
                      {tech}
                    </button>
                  {/each}
                </div>

                <div class="text-blue-400 text-sm">
                  <i class="fa-solid fa-calendar-alt mr-2"></i>
                  Coming Soon
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </section>
  {/if}

  <!-- Call to Action -->
  <section class="py-16 text-center">
    <div class="max-w-2xl mx-auto">
      <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl mb-4">
        Interested in <span class="poppins text-purple-500"
          >working together</span
        >?
      </h3>
      <p class="text-gray-300 mb-8 text-lg">
        I'm always open to new opportunities and interesting projects. Let's
        discuss how we can bring your ideas to life!
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          class="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition duration-200"
        >
          Get in Touch
        </a>
        <a
          href="https://github.com/Hecker-01"
          target="_blank"
          class="px-8 py-3 rounded-full border border-purple-600 text-purple-400 font-semibold hover:bg-purple-600 hover:text-white transition duration-200"
        >
          Follow on GitHub
        </a>
      </div>
    </div>
  </section>
</main>
