<svelte:head>
  <title>{$page.status || "Something went wrong!"} • HeckerDev.net</title>
</svelte:head>

<script>
  import { page } from "$app/stores";
</script>

<main>
  <h1 class="status-code">{$page.status || "Oops!"}</h1>
  <p class="error-message">
    {$page.error?.message || "Something went wrong. Please try again later."}
  </p>
  <a
    href="/"
    class="text-xl blueShadow relative overflow-hidden px-6 py-4 group rounded-full bg-purple-700 text-white hover:bg-purple-600 duration-200"
  >
    <i class="fas fa-home pr-3" />
    Back to home</a
  >
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 85vh;
    padding: 2rem;
  }

  .status-code {
    font-size: 8rem;
    margin-bottom: 4rem;
  }

  .error-message {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
</style>
