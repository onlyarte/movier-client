export const makeMetadata = (config?: { title?: string }) => {
  return {
    title: config?.title ? `${config.title} | The Movier` : 'The Movier',
  };
};
