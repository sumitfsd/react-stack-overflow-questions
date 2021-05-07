import { getRequest } from "./utility";
import { API_URL } from "./config";

export const getQuestionsRequest = async (data: object) => {
  return await getRequest(API_URL, data);
};
