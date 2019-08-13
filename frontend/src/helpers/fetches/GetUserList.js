import { proxy } from "../../constants.js";

const fetchGetUserList = group => {
  console.log("in fetch: " + group);
  return new Promise((resolve, reject) => {
    fetch(proxy + "/user", {
      method: "GET",
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

export default fetchGetUserList;
