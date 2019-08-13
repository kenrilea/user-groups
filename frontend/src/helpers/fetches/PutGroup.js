import { proxy } from "../../constants.js";

const fetchPutGroup = (group, type, user) => {
  return new Promise((resolve, reject) => {
    let data = new FormData();
    data.append("user", user);
    data.append("type", type);
    data.append("group", group);
    fetch(proxy + "/group", {
      method: "PUT",
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

export default fetchPutGroup;
