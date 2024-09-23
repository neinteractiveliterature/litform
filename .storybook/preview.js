import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const parameters = {
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
      const aSplit = a.title.split('/');
      const bSplit = b.title.split('/');
      const aPath = aSplit.slice(0, aSplit.length - 1).join('/');
      const bPath = bSplit.slice(0, bSplit.length - 1).join('/');

      if (aPath !== bPath) {
        return aPath.localeCompare(bPath, undefined, { sensitivity: 'base' });
      }

      if (a.id === 'Page' && b.id !== 'Page') {
        return -1;
      }

      if (a.id !== 'Page' && b.id === 'Page') {
        return 1;
      }

      const aSlashCount = (a.title.match(/\//g) || []).length;
      const bSlashCount = (b.title.match(/\//g) || []).length;

      if (aSlashCount === bSlashCount) {
        return a.title.localeCompare(b.title, undefined, { sensitivity: 'base' });
      }

      return aSlashCount - bSlashCount;
    },
  },
};
export const tags = ['autodocs'];
