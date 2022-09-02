import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'docs-json-watch-bug',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'dist/components.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
