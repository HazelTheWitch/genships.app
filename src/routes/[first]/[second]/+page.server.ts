import { get_character_info } from "../../../helper/character";
import type { PageServerLoad } from "./$types";
import { error } from '@sveltejs/kit';
import { get_next_ship } from "../../../helper/ship";

export const load = (({ params }) => {
    const first = get_character_info(params.first);

    if (first === undefined) {
        throw error(404, { message: "Not Found" });
    }

    const second = get_character_info(params.second);

    if (second === undefined) {
        throw error(404, { message: "Not Found" });
    }

    const [next_first, next_second] = get_next_ship();

    return {
        first,
        second,
        next: {
            next_first,
            next_second,
        },
    }
}) satisfies PageServerLoad;