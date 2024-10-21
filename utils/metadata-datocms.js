export const setMetaData = (title, suffix, description) => {
  return {
    title : `${title} | ${suffix}`,
    description: description
  }
}
