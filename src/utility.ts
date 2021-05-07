import axios from "axios";

export const getRequest = async (url: string, data: object) => {
  try {
    return await axios.get(url, {
      params: data
    });
  } catch (err) {
    if (err.response && err.response.data) {
      if (err.response.data.error_message) {
        return { message: err.response.data.error_message };
      }
    }
    return err;
  }
};
