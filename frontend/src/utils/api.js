export const generateIdea = async () => {
  const res = await fetch("http://localhost:3000/generate");
  return res.json();
};