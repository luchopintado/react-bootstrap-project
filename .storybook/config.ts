import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/stories', true);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

// There is a known bug as of CRA 2.1.3 with storybook
// https://github.com/storybooks/storybook/issues/5183
// Workaround is to change the babel-loader dependency version in package.json to 8.0.4, which CRA depends on.
