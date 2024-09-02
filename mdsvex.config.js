import {defineMDSveXConfig as defineConfig} from 'mdsvex';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../')

const config = defineConfig ({
  extensions: [".md", ".svx"],
  layout: {
    default: path.join(dirname, './src/components/layouts/BlogLayout.svelte'),
  }
});

export default config;