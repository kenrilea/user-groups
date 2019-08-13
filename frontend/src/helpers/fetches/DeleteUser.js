import { proxy } from "../../constants.js";

const fetchDeleteUser = user => {
  return new Promise((resolve, reject) => {
    let data = new FormData();
    data.append("user", user);
    fetch(proxy + "/user", {
      method: "DELETE",
      body: data
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

export default fetchDeleteUser;
