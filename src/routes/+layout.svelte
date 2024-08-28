<script lang="ts">
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import "../app.css";

  let y: number;
</script>


<div
  class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <Header {y}/>
  <slot />
</div>
<Footer />
