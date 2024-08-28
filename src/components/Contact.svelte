<script lang="ts">
  let contactDetails = [
    {
      type: "Email",
      icon: "fa-solid fa-envelope",
      value: "Send me an Email",
      href: "mailto:info@heckerdev.net",
    },
    {
      type: "Discord",
      icon: "fa-brands fa-discord",
      value: "Message me on Discord",
      href: "https://discord.gg/",
    },
    {
      type: "Github",
      icon: "fa-brands fa-github",
      value: "Find me on GitHub",
      href: "https://github.com/hecker-01",
    },
  ];

  let socialLinks = [
    {
      platform: "GitHub",
      icon: "fa-brands fa-github",
      href: "https://github.com/hecker-01",
    },
    {
      platform: "Steam",
      icon: "fa-brands fa-steam",
      href: "https://steamcommunity.com/id/Hecker_01/",
    },
    {
      platform: "",
      icon: "fa-brands fa-discord",
      href: "https://discord.gg",
    },
  ];

  let faqs = [
    {
      question: "How can I contact you?",
      answer:
        "You can contact me via email, discord, or by filling out the form on this page.",
    },
    {
      question: "What services do you offer?",
      answer:
        "I specialize in Java development, particularly in creating Minecraft plugins, Discord bots, and more.",
    },
  ];

  let formSubmitted: boolean = false;

  function handleSubmit(event: Event) {
    event.preventDefault();
    formSubmitted = true;
    // TODO: add logic to send the form data to your server
  }
</script>

<main class="flex flex-col flex-1 p-4">
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 sm:py-16">
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-8 md:gap-10 lg:gap-12"
    >
      <h2
        class="font-semibold text-4xl sm:text-5xl md:text-6xl text-purple-500"
      >
        Get in Touch
      </h2>
      <p class="text-lg sm:text-xl md:text-2xl">
        Have a <span class="text-purple-500">question</span> or want to work
        together? Drop me a <span class="text-purple-500">message</span>!
      </p>
      <div class="flex flex-col gap-4">
        {#each contactDetails as detail}
          <a
            href={detail.href}
            target="_blank"
            class="flex items-center gap-4 text-lg"
          >
            <i class="w-4 content-center {detail.icon}"></i>
            <span class="underline">{detail.value}</span>
          </a>
        {/each}
      </div>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <!-- Temporary Notice -->
      <div
        class="border-l-4 border-yellow-600 bg-yellow-200 text-yellow-800 p-4 rounded-lg mb-4"
      >
        <p class="text-center font-semibold">
          Note: The contact form is currently not functional. Please use the
          email or Discord link to contact me.
        </p>
      </div>
      <!-- End of notice -->
      {#if !formSubmitted}
        <form
          on:submit={handleSubmit}
          class="flex flex-col gap-4 w-full max-w-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            class="p-4 rounded-lg border border-gray-300 text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            class="p-4 rounded-lg border border-gray-300 text-black"
          />
          <textarea
            placeholder="Your Message"
            required
            class="p-4 rounded-lg border border-gray-300 text-black"
          ></textarea>
          <button
            type="submit"
            class="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 duration-200"
          >
            Send Message
          </button>
        </form>
      {:else}
        <div class="text-center">
          <p class="text-2xl font-semibold text-purple-600">
            Thank you for your message!
          </p>
          <p class="text-lg">I'll get back to you soon.</p>
        </div>
      {/if}
    </div>
  </section>
  <section class="py-6 sm:py-20">
    <div class="text-center mb-12">
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        <span class="text-purple-500">Follow</span> me on Social Media
      </h3>
      <p class="text-lg sm:text-xl md:text-2xl mt-4">
        Stay updated with my latest projects and activities.
      </p>
    </div>
    <div class="flex justify-center gap-8">
      {#each socialLinks as link}
        <a
          href={link.href}
          target="_blank"
          class="text-4xl hover:text-purple-600 duration-200"
        >
          <i class={link.icon}></i>
        </a>
      {/each}
    </div>
  </section>
  <section class="py-6">
    <div class="text-center mb-12">
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Frequently Asked Questions
      </h3>
      <p class="text-lg sm:text-xl md:text-2xl mt-4">
        Here are some common questions I receive.
      </p>
    </div>
    <div class="max-w-2xl mx-auto">
      {#each faqs as faq}
        <div class="mb-8">
          <h4 class="text-xl sm:text-2xl font-semibold text-purple-600">
            {faq.question}
          </h4>
          <p class="text-lg mt-2">
            {faq.answer}
          </p>
        </div>
      {/each}
    </div>
  </section>
</main>
