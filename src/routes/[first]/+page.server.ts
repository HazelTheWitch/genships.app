import { error } from "@sveltejs/kit";
import { get_character_info } from "../../helper/character";
import type { PageServerLoad } from "./$types";

export const load = (({ params }) => {
    const character = get_character_info(params.first);

    if (character === undefined) {
        throw error(404, { message: "Not Found" });
    }

    return {
        character,
    }
}) satisfies PageServerLoad;