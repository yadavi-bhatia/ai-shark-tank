import { generateIdea } from "../../ai/generateIdea.js";

export async function generateStartupIdea() {
  const idea = await generateIdea();
  return idea;
}