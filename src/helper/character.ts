import type { Character } from "genshin-db";

export type CharacterInfo = {
    name: string,
    fullname: string,
    title: string,
    icon: string,
    cover?: string,
    element_color: string,
    child: boolean,
}

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