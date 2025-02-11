import { requestHandler } from "./requestHandler";

// TODO: refactor api calls to use requestHandler
export const hello = async () => {
  return await requestHandler("/api", "GET");
};