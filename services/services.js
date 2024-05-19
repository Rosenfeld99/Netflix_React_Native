import axios from "axios";
import { TOKEN_KEY } from "../constants";
import { getData } from "../Apps/utils/storageAction";

// POST,PUT,DELETE,PATCH --> by methods
export const apiMethod = async (_url, _method, _bodyData) => {
  // console.log(await getData(TOKEN_KEY));
  try {
    // console.log(_bodyData);
    const { data } = await axios({
      url: _url,
      method: _method,
      data: _bodyData,
      headers: {
        "x-api-key": await getData(TOKEN_KEY),
      },
    });
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
