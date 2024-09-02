<script>
    import './github-markdown-dark.css';
    export let title;
</script>

<svelte:head>
    <title>{title} • HeckerDev.net</title>
</svelte:head>

<main class="max-w-7xl self-center py-7">
    <h1 class="text-5xl font-[600]" style="font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';">{title}</h1>
    <div class="markdown-body:">
        <slot />
    </div>
</main>