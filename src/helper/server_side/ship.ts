import genshindb from "genshin-db";
import { randomChoice } from "@/helper/choice";

function is_child(name: string): boolean {
    return genshindb.characters(name, { queryLanguages: [genshindb.Language.English] })?.body == "LOLI";
}

export function get_next_ship(): [string, string] {
    const names = genshindb.characters("names", { queryLanguages: [genshindb.Language.English], matchCategories: true }).filter((name) => name != "Aloy");

    const first = randomChoice(names);
    const child = is_child(first);

    const second = randomChoice(names.filter((name) => name != first && is_child(name) == child));

    return [first, second];
}