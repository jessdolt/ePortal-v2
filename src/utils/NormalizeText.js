export const NormalizeText = (name) => {
  return name.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
};
