/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig( {
    
    plugins: [ react() ],
    test: {
          environment:'jsdom',
          globals: true,
          css: true,
            
            
        },
    optimizeDeps: {
        esbuildOptions: {
            // Node.js global to browser globalThis
            define: {
                global: 'globalThis',
            },
        },
      
        
    },
    resolve: {
        alias: [ { find: "@", replacement: resolve( __dirname, "./src" ) } ]

}
})
