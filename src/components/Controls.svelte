<script lang="ts">
	const stars = [1, 2, 3, 4, 5];

    export let first_next: string;
    export let second_next: string;

    let star_rating: number = 3;
    let sent: boolean = false;
    let locked: boolean = false;
</script>

<div class="py-8 flex flex-col justify-center lg:max-w-xs lg:px-18">
    <div class="flex-col justify-center lg:max-w-xs lg:px-18">
        <div class="flex flex-row justify-center my-5">
            {#each stars as star}
                <button class="flex items-center justify-center" on:mouseenter={() => { if (!locked) { star_rating = star; }}} on:click={() => {
                    if (!sent) {
                        star_rating = star;
                        locked = true;
                    }
                }}>
                    <svg viewBox="0 0 24 24" fill="#E6F23F" stroke="#E6F23F" fill-opacity={(star <= star_rating) ? 1 : 0}>
                        <use href="/star.svg#star" />
                    </svg>
                </button>
            {/each}
        </div>
        <button disabled={!locked || sent} on:click={() => {
            sent = true;
        }} class="bg-blue-500 rounded-xl mx-1 grid place-items-center disabled:bg-gray-500 enabled:hover:bg-blue-400 transition-colors h-16 drop-shadow-md w-full text-slate-200 text-3xl p-3">
            Submit
        </button>
    </div>
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