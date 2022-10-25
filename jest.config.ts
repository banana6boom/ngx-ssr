const { getJestProjects } = require('@nrwl/jest');

export default {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/rickandmorty',
    '<rootDir>/libs/rickandmorty/api',
    '<rootDir>/libs/rickandmorty/utils',
    '<rootDir>/libs/ngx-ssr/cache',
    '<rootDir>/libs/ngx-ssr/timeout',
    '<rootDir>/libs/ngx-ssr/platform',
    '<rootDir>/libs/banana6boom-ngx-ssr/cache',
    '<rootDir>/libs/banana6boom-ngx-ssr/timeout',
    '<rootDir>/libs/banana6boom-ngx-ssr/platform',
  ],
};
