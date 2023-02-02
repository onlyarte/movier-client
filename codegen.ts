import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000/graphql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/graphql/': {
      preset: 'client',
      plugins: ['typescript-react-apollo'],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
