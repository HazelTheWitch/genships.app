import genshindb, { type Character } from "genshin-db";
import type { CharacterInfo } from "@/helper/character";

export const ELEMENT_COLORS: { [name: string]: string } = {
    Anemo: '#80FFD7',
    Cryo: '#99FFFF',
    Dendro: '#B2EA2A',
    Electro: '#FFACFF',
    Geo: '#FFE699',
    Hydro: '#80C0FF',
    Pyro: '#FF9999',
}

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