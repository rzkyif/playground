import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://playground.rzkyif.my.id',
  integrations: [solidJs(), tailwind(), sitemap(), compress()]
});