export const ParseInitials = (str) => {
  return str
    .split(" ")
    .map((word) => word.slice(0, 1))
    .join("");
};
