import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Litform',
      fileName: 'index',
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'react-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // can't get import to work until Bootstrap supports it
        silenceDeprecations: ['import', 'legacy-js-api'],
        quietDeps: true,
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./testSetup.ts'],
    globals: true,
    reporters: [
      'default',
      ['junit', { outputFile: './test/reports/TEST-vitest.xml' }],
      ['html', { outputFile: './test/html_reports/vitest-report.html' }],
    ],
    coverage: {
      enabled: true,
      include: ['./src/**/*.{js,jsx,ts,tsx}'],
      reportsDirectory: './coverage',
      reporter: ['text', 'lcov'],
      reportOnFailure: true,
    },
  },
});