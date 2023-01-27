<script lang="ts">
    import genshindb, { Language } from "genshin-db";
    import type { Character } from "genshin-db";
    import CharacterCard from "../components/CharacterCard.svelte";
	import { to_character_info } from "../helper/character";

    const yoimiya = to_character_info(genshindb.characters("Yoimiya", { queryLanguages: [Language.English] }) as Character);
    const ayaka = to_character_info(genshindb.characters("Kamisato Ayaka", { queryLanguages: [Language.English] }) as Character);
</script>

<CharacterCard first={yoimiya} second={ayaka} href="/" >
    Yoimiya
</CharacterCard>
