import { proxy } from "../../constants.js";

const fetchGetGroupList = group => {
  console.log("in fetch: " + group);
  return new Promise((resolve, reject) => {
    fetch(proxy + "/group", {
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

export default fetchGetGroupList;
