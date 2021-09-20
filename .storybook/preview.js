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
};
