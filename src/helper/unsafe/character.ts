import genshindb, { type Character } from "genshin-db";
import { ELEMENT_COLORS, type CharacterInfo } from "@/helper/character";

export function to_character_info(character: Character): CharacterInfo {
    return {
        name: character.name,
        fullname: character.fullname,
        title: character.title,
        icon: character.images.icon,
        cover: character.images.cover1,
        element_color: (character.element in ELEMENT_COLORS) ? ELEMENT_COLORS[character.element] : "#DBE890",
        child: character.body == "LOLI",
    }
}

export function get_character_info(name: string): CharacterInfo | undefined {
    const character = genshindb.characters(name, { queryLanguages: [genshindb.Language.English] });

    if (character === undefined) {
        return undefined;
    }

    return to_character_info(character);
}