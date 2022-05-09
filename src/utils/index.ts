export const searchTagContent = (code: string, tag: string) => {
  const matchTagReg = new RegExp(`<${tag}>(.*)</${tag}>`, "g");
  const matchedString = code.match(matchTagReg);
  if (!matchedString) return "";
  const matchTagOnlyReg = new RegExp(`<\/?${tag}>`, "g");
  return matchedString.map((val) => {
    return val.replace(matchTagOnlyReg, "");
  });
};
