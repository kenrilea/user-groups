import { proxy } from "../../constants.js";

const fetchCreateGroup = (group, firstMember) => {
  console.log("in fetch: " + group);
  return new Promise((resolve, reject) => {
    let data = new FormData();
    data.append("groupname", group);
    data.append("firstMember", firstMember);
    fetch(proxy + "/group", {
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

export default fetchCreateGroup;
