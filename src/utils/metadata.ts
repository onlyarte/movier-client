export const makeMetadata = (config?: { title?: string }) => {
  return {
    title: config?.title ? `${config.title} | Movier` : 'Movier',
  };
};
