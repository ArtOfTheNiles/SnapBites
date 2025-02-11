import { requestHandler } from "./requestHandler";

// TODO: refactor api calls to use requestHandler
export async function hello() {
  return await requestHandler("/api", "GET");
};