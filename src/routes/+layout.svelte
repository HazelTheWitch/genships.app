<script>
    import "../app.css";
</script>

<main class="montserrat bg-slate-600 h-screen">
    <nav class="bg-gradient-to-r from-slate-500 to-slate-600">
        <ol>
            <li>
                <a href="/"><h1 class="text-5xl px-16 py-4 text-slate-200">Genships</h1></a>
            </li>
        </ol>
    </nav>
    <slot />
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');

    .montserrat {
        font-family: 'Montserrat', sans-serif;
    }
</style>