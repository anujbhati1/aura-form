export const formDataToObject = (formData: FormData) => {
  const object = Object.fromEntries(formData.entries()) as Record<
    string,
    string
  >;
  return object;
};
