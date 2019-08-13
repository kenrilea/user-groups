import { proxy } from "../../constants.js";

const fetchCreateUser = username => {
  return new Promise((resolve, reject) => {
    let data = new FormData();
    data.append("username", username);
    fetch(proxy + "/user", {
      method: "POST",
      body: data,
      credentials: "include"
    })
      .then(res => {
        return res.text();
      })
      .then(resBody => {
        let parsedRes = JSON.parse(resBody);
        resolve(parsedRes);
      });
  });
};

export default fetchCreateUser;
