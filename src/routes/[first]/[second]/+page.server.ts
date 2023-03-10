import { get_character_info } from "@/helper/server_side/character";
import { get_next_ship } from "@/helper/server_side/ship";
import type { PageServerLoad } from "./$types";
import { error } from '@sveltejs/kit';

export const load = (({ params }) => {
    const first = get_character_info(params.first);

    if (first === undefined) {
        throw error(404, { message: "Not Found", invalid_ship: false });
    }

    const second = get_character_info(params.second);

    if (second === undefined) {
        throw error(404, { message: "Not Found", invalid_ship: false });
    }

    if (first.name == second.name) {
        throw error(404, { message: "Not Found", invalid_ship: false });
    }

    if (first.child != second.child) {
        throw error(404, { message: "Not Found", invalid_ship: true });
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