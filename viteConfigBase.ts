import { ViteUserConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

export function getEntryPoints(basedir: string) {
  const srcFiles = globSync(path.join(basedir, 'src/**/*.{js,jsx,ts,tsx}'), {
    ignore: ['src/stories/**/*', 'src/__tests__/**/*', '**/*.d.ts'],
  });

  return Object.fromEntries(
    srcFiles.map((file) => [
      // This remove `src/` as well as the file extension from each
      // file, so e.g. src/nested/foo.js becomes nested/foo
      path.relative('src', file.slice(0, file.length - path.extname(file).length)),
      // This expands the relative paths to absolute paths, so e.g.
      // src/nested/foo becomes /project/src/nested/foo.js
      fileURLToPath(new URL(file, import.meta.url)),
    ]),
  );
}

export const viteConfigBase: ViteUserConfig = {
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true,
        declarationMap: true,
      },
      exclude: ['./src/stories', './src/__tests__'],
      outDir: 'dist/types',
    }),
  ],
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
        /^@neinteractiveliterature\/litform/,
      ],
      // input: entryPoints,
      output: {
        chunkFileNames: '[format]/[name].js',
        entryFileNames: '[format]/[name].js',
        exports: 'named',
        globals: (name) => {
          if (name === 'react') {
            return 'React';
          } else {
            return name;
          }
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
    setupFiles: [path.join(import.meta.dirname, 'testSetup.ts')],
    globals: true,
  },
};
