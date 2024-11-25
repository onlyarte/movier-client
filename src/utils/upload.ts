export const uploadFile = async (file: File) => {
  if (!file) return undefined;

  const formData = new FormData();
  formData.append('file', file);

  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/upload`, {
    method: 'POST',
    body: formData,
  });

  if (result.status !== 200) {
    const { error } = await result.json();
    throw new Error(`Failed to upload the file: ${error}.`);
  }

  return result.text();
};
