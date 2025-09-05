import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@radix-ui/react-slot', '@radix-ui/react-tooltip', '@radix-ui/react-dialog'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-icons': ['lucide-react'],
          'vendor-charts': ['recharts'],
          // Data chunks
          'data-countries': ['./src/data/countries.ts'],
          'data-extended': ['./src/data/extended-data.ts', './src/data/land-areas.ts'],
          // Utils chunks
          'lib-cnp': ['./src/lib/cnp-calculator.ts'],
          'lib-utils': ['./src/lib/utils.ts'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit to 1MB for now
  },
}));
