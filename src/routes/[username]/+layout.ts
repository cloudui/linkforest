import type { LayoutLoad } from './$types';

export const load = (async ({ params }) => {
    return {
        username: params.username,
    };
}) satisfies LayoutLoad;