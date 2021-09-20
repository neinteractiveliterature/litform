import { PARAM_KEY as docsViewId } from '@storybook/addon-docs/dist/esm/shared';
import { addParameters } from '@storybook/react';

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

addParameters({
  viewMode: docsViewId,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  docs: {
    source: {
      state: true,
    },
  },
  options: {
    storySort: (a, b) => {
      const aSplit = a[1].kind.split('/');
      const bSplit = b[1].kind.split('/');
      const aPath = aSplit.slice(0, aSplit.length - 1).join('/');
      const bPath = bSplit.slice(0, bSplit.length - 1).join('/');

      if (aPath !== bPath) {
        return aPath.localeCompare(bPath, undefined, { sensitivity: 'base' });
      }

      if (a[1].name === 'Page' && b[1].name !== 'Page') {
        return -1;
      }

      if (a[1].name !== 'Page' && b[1].name === 'Page') {
        return 1;
      }

      const aSlashCount = (a[1].kind.match(/\//g) || []).length;
      const bSlashCount = (b[1].kind.match(/\//g) || []).length;

      if (aSlashCount === bSlashCount) {
        return a[1].kind.localeCompare(b[1].kind, undefined, { sensitivity: 'base' });
      }

      return aSlashCount - bSlashCount;
    },
  },
};
