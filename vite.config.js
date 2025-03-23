import { defineConfig } from 'vite';
import Dotenv from 'dotenv';
import laravel from 'laravel-vite-plugin';
import mkcert from 'vite-plugin-mkcert'
Dotenv.config();

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/site.css',
                'resources/js/site.js',
                // Control Panel assets.
                // https://statamic.dev/extending/control-panel#adding-css-and-js-assets
                // 'resources/css/cp.css',
                // 'resources/js/cp.js',
            ],
            refresh: true,
        }),
        mkcert()
        // vue2(),
    ],
    server: {
        https: true,
        hmr: {
            host: process.env.APP_URL.replace('https://', ''),
        },
        cors: {
            origin: process.env.APP_URL,
        }
    }
});
