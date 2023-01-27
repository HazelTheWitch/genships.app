import type { CharacterInfo } from "./character";

const SYLLABLE_REGEX = /[^aeiou]*[aeiou]+(?:[^aeiou]*$|[^aeiou](?=[^aeiou]))?/gi;

const OVERRIDES: { [name: string]: string[] } = {
    "Raiden Shogun": ["Rai", "den"],
    "Kuki Shinobu": ["Ku", "ki"],
    "Xingqiu": ["Xing", "qiu"],
    "Fischl": ["Fi", "schl"],
    "Cyno": ["Cy", "no"],
    "Alhaitham": ["Al", "haith", "am"],
}

export function hash(str: string): number {
    let hash = 0;
    if (str.length == 0) {
        return hash;
    }

    for (let i = 0; i < str.length ; i++) {
        const ch = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + ch;
        hash = hash & hash;
    }

    return hash;
}

function split_syllables(name: string): string[] {
    if (name in OVERRIDES) {
        return OVERRIDES[name];
    }

    const syllables = name.split(" ").slice(-1)[0].match(SYLLABLE_REGEX);

    if (syllables === null) {
        return [];
    }

    return syllables;
}

export function order_characters(first: CharacterInfo, second: CharacterInfo): [CharacterInfo, CharacterInfo] {
    if (hash(first.name) < hash(second.name)) {
        return [first, second];
    }
    return [second, first]
}

export function ship_name(first: CharacterInfo, second: CharacterInfo): string {
    [first, second] = order_characters(first, second);

    const first_syllables = split_syllables(first.name);

    if (first_syllables.length == 0) {
        return second.name;
    }

    const second_syllables = split_syllables(second.name)

    if (second_syllables.length == 0) {
        return first.name;
    }

    const first_pivot = Math.ceil(first_syllables.length / 2);
    const second_pivot = Math.floor(second_syllables.length / 2);

    let final = "";

    for (let i = 0; i < first_pivot; i++) {
        final += first_syllables[i];
    }

    for (let i = second_pivot; i < second_syllables.length; i++) {
        final += second_syllables[i];
    }

    return final.charAt(0).toUpperCase() + final.substring(1).toLowerCase();
}