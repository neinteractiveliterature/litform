import { defineConfig } from 'vitest/config';
import { viteConfigBase } from './viteConfigBase';

export default defineConfig({
  ...viteConfigBase,
  test: {
    workspace: ['packages/*'],
    reporters: [
      'default',
      ['junit', { outputFile: './test/reports/TEST-vitest.xml' }],
      ['html', { outputFile: './test/html_reports/vitest-report.html' }],
    ],
    coverage: {
      enabled: true,
      include: ['packages/*/src/**/*.{js,jsx,ts,tsx}'],
      reportsDirectory: './coverage',
      reporter: ['text', 'lcov'],
      reportOnFailure: true,
    },
  },
});
