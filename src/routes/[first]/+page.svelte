<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<div class="flex flex-col items-center justify-center">
    <div class="grid grid-cols-[2fr,1fr] w-full border-b-2 border-slate-200 lg:min-h-[20rem]">
        <div class="flex flex-col justify-center m-6 text-slate-200">
            <h1 class="lg:text-9xl text-6xl">{ data.character.fullname }</h1>
            <h2 class="lg:text-5xl text-2xl pl-6">{ data.character.title }</h2>
        </div>
        <div class="lg:block hidden" style="background-image: url({data.character.cover}); background-size: contain; background-repeat: no-repeat; background-position: 100% 100%;"></div>
    </div>
</div>