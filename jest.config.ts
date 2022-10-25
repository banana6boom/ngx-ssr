const { getJestProjects } = require('@nrwl/jest');

export default {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/rickandmorty',
    '<rootDir>/libs/ngx-ssr/cache',
    '<rootDir>/libs/rickandmorty/api',
    '<rootDir>/libs/rickandmorty/utils',
    '<rootDir>/libs/ngx-ssr/timeout',
    '<rootDir>/libs/ngx-ssr/platform',
  ],
};
