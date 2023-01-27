<script lang="ts">
	import CharacterCard from "../../../components/CharacterCard.svelte";
	import { ship_name } from "../../../helper/ship";
    import type { PageData } from "./$types";
    import Color from "color";
	import Controls from "../../../components/Controls.svelte";

    export let data: PageData;

    const ship = ship_name(data.first, data.second);

    const first_bg = Color(data.first.element_color).darken(0.1).desaturate(0.25);
    const second_bg = Color(data.second.element_color).darken(0.5).desaturate(0.25);
</script>

<div class="pb-36 px-8 flex flex-col items-center min-h-full" style="background-image: linear-gradient(120deg, {first_bg.string()} 0%, {second_bg.string()} 100%);">
    <h1 class="text-6xl text-slate-200 pt-36 pb-24">{ship}</h1>
    <hr class="w-[85%] py-8 mx-auto">
    <div class="w-[80%] flex lg:flex-row flex-col items-center justify-around">
        <CharacterCard first={data.first} href="/{data.first.name}">{data.first.name}</CharacterCard>
        <Controls first_next={data.next[0]} second_next={data.next[1]} />
        <CharacterCard first={data.second} href="/{data.second.name}">{data.second.name}</CharacterCard>
    </div>
</div>