<script lang="ts">
    import { page } from "$app/stores";
</script>

{#if $page.error?.invalid_ship}
    <div class="flex justify-center items-center h-full">
        <img src="https://media.tenor.com/tEEjB0RnxyAAAAAC/puppet-awkward.gif" alt="">
    </div>
{:else }
    <div class="grid grid-cols-5">
        <div class="row-start-3 col-start-3 flex lg:flex-row flex-col justify-center items-center text-slate-200">
            <h1 class="lg:text-[16rem] text-9xl p-6">{$page.status}</h1>
            <div class="flex flex-col justify-center items-start p-3">
                <h2 class="text-7xl underline">Error</h2>
                <h3 class="text-5xl whitespace-nowrap">{$page.error?.message}</h3>
            </div>
        </div>
    </div>
{/if}