import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

const entryPoints = Object.fromEntries(
  globSync('src/**/*.{js,jsx,ts,tsx}', {
    ignore: ['src/stories/**/*', 'src/__tests__/**/*', '**/*.d.ts'],
  }).map((file) => [
    // This remove `src/` as well as the file extension from each
    // file, so e.g. src/nested/foo.js becomes nested/foo
    path.relative('src', file.slice(0, file.length - path.extname(file).length)),
    // This expands the relative paths to absolute paths, so e.g.
    // src/nested/foo becomes /project/src/nested/foo.js
    fileURLToPath(new URL(file, import.meta.url)),
  ]),
);

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Litform',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    sourcemap: true,
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        'react-bootstrap4-modal',
        'luxon',
        'codemirror',
        /^@apollo\//,
        /^@codemirror\//,
        /^@lezer\//,
        /^@popperjs\//,
      ],
      input: entryPoints,
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].[format]',
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
