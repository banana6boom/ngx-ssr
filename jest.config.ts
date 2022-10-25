const { getJestProjects } = require('@nrwl/jest');

module.exports = {
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
