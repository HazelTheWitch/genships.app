<script lang="ts">
    export let sent = false;

    const stars = [1, 2, 3, 4, 5];
    let locked = false;

    let star_rating = 3;
</script>

<div class="flex-col justify-center lg:max-w-xs lg:px-18">
    <div class="flex flex-row justify-center my-5">
        {#each stars as star, i}
            <button class="flex items-center justify-center" on:mouseenter={() => { if (!locked) { star_rating = i; }}} on:click={() => {
                if (!sent) {
                    star_rating = i;
                    locked = true;
                }
            }}>
                <svg viewBox="0 0 24 24" fill="#E6F23F" stroke="#E6F23F" fill-opacity={(i <= star_rating) ? 1 : 0}>
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