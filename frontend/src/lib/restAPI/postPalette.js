import axios from "axios";

export const postPalette = (data) => {
  try {
    return axios.post("http://localhost:8000/api/v1/palette", data);
  } catch (err) {
    return err;
  }
};
