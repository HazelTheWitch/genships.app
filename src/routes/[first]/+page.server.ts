import { error } from "@sveltejs/kit";
import { get_character_info } from "@/helper/server_side/character";
import type { PageServerLoad } from "./$types";

export const load = (({ params }) => {
    const character = get_character_info(params.first);

    if (character === undefined) {
        throw error(404, { message: "Not Found", invalid_ship: false });
    }

    return {
        character,
    }
}) satisfies PageServerLoad;