import type { PageServerLoad } from './$types';
import { GARCHI_SPACE_UID } from '$env/static/private';

import { getPage } from '$lib/server/garchi';

export const load: PageServerLoad = async (event) => {
	return getPage(GARCHI_SPACE_UID, 'draft', '/home');
};