<script lang="ts">
	import Rating from "./Rating.svelte";

    export let first_next: string;
    export let second_next: string;

    let sent = false;
</script>

<div class="py-8 flex flex-col justify-center lg:max-w-xs lg:px-18">
    <Rating bind:sent={sent} />
    <div class="flex flex-row justify-center my-5">
        <a href="/" class="button bg-red-500 hover:bg-red-400">Home</a>
        <a href="/{first_next}/{second_next}" class="button bg-green-500 hover:bg-green-400">{ sent ? "Next" : "Skip" }</a>
    </div>
</div>

<style>
    .button {
        @apply rounded-xl mx-1 flex-1 grid place-items-center transition-colors h-16 drop-shadow-md w-1/2 text-slate-200 text-3xl p-3;
    }
</style>