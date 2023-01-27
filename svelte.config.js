import appengine from "svelte-adapter-appengine";
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: appengine(),
		alias: {
			"@/*": "./src/*"
		}
	}
};

export default config;
