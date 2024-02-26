export const getMediaLink = link => {
  const normalizedLink = link
    ?.replace('watch?v=', 'embed/')
    .replace('/view', '/preview');

  return normalizedLink;
};
