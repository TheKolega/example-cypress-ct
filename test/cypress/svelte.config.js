import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

export default {
  extensions: [".svelte"],
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess()
}
