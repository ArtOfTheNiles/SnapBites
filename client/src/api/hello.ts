import { requestHandler } from "./requestHandler";

// TODO: add functions for real routes
export const hello = async () => {
  return await requestHandler("/api", "GET");
};