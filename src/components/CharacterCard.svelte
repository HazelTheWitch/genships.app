<script lang="ts">
	import type { CharacterInfo } from "../helper/character";


    export let first: CharacterInfo;
    export let second: CharacterInfo | undefined = undefined;

    export let href: string;
</script>

<div class="rounded-3xl bg-slate-200 drop-shadow-md" style="width: 256px;">
    <a href={href}>
        {#if second === undefined}
            <img src={first.icon} alt={first.name} class="rounded-t-3xl rounded-b-2xl drop-shadow-md" width={256} height={256} style={`background-color: ${first.element_color};`}>
        {:else}
            <div class="flex flex-row rounded-t-3xl rounded-b-2xl drop-shadow-md" style={`background-image: linear-gradient(120deg, ${first.element_color} 0%, ${second.element_color} 100%);`}>
                <img src={first.icon} alt={first.name} class="rounded-tl-3xl rounded-bl-2xl" width={128} style="height: 256px; object-fit: none; object-position: 0% 50%;" />
                <img src={second.icon} alt={second.name} class="rounded-tr-3xl rounded-br-2xl" width={128} style="height: 256px; object-fit: none; object-position: 100% 50%;" />
            </div>
        {/if}
        <div class="grid justify-center items-center text-slate-800 text-xl" style="height: 2.5em;">
            <slot />
        </div>
    </a>
</div>