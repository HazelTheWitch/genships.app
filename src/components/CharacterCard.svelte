<script lang="ts">
	import { ELEMENT_COLORS, type CharacterInfo } from "@/helper/character";
	import { randomChoice } from "@/helper/choice";


    export let first: CharacterInfo | undefined = undefined;
    export let second: CharacterInfo | undefined = undefined;

    const placeholder = first === undefined && second === undefined;
</script>

<div class="rounded-3xl bg-slate-200 drop-shadow-md" style="width: 256px;">
    {#if first === undefined}
        {@const color = randomChoice(Object.values(ELEMENT_COLORS))}
        <div class="left-half right-half drop-shadow-md" style="width: 256px; height: 256px; background-color: {color}" />
    {:else if second === undefined}
        <img src={first.icon} alt={first.name} class="left-half right-half drop-shadow-md" width={256} height={256} style="background-color: {first.element_color};">
    {:else}
        <div class="flex flex-row left-half right-half drop-shadow-md" style="background-image: linear-gradient(120deg, {first.element_color} 0%, {second.element_color} 100%);">
            <img src={first.icon} alt={first.name} class="left-half" width={128} style="height: 256px; object-fit: none; object-position: 0% 50%;" />
            <img src={second.icon} alt={second.name} class="right-half" width={128} style="height: 256px; object-fit: none; object-position: 100% 50%;" />
        </div>
    {/if}
    <div class="grid justify-center items-center text-slate-800 text-xl" style="height: 2.5em;">
        {#if placeholder}
            <div class="w-40 h-6 bg-slate-500 rounded-xl"/>
        {:else}
            <slot />
        {/if}
    </div>
</div>

<style>
    .left-half {
        @apply rounded-tl-3xl rounded-bl-2xl;
    }

    .right-half {
        @apply rounded-tr-3xl rounded-br-2xl;
    }
</style>