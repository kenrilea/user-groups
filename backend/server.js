const express = require("express");
const app = express();

const multer = require("multer");
const upload = multer();

const cors = require("cors");
app.use(cors());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//_________TEMPLATES__________

const TEMPLATE_USER = { username: "" };

// ________FAKE DATA BASE________
const userList = [];
const groupList = {};

//___________ENDPOINTS_______________

// user get,post,delete

// get a list of users
app.get("/user", (req, res) => {
  console.log("GET /user");
  res.send(JSON.stringify({ success: true, data: { userList } }));
});
//---------------------------------------------------------------------------

//creating a user
app.post("/user", upload.none(), (req, res) => {
  console.log(req.body.username);
  if (req.body.username.length >= 20) {
    res.send(
      JSON.stringify({
        success: false,
        message: "username length must be less than 20"
      })
    );
    return;
  }
  if (req.body.username.length < 1) {
    res.send(
      JSON.stringify({
        success: false,
        message: "username length must be at least 1 character"
      })
    );
    return;
  }
  if (
    userList.filter(elem => {
      return elem.username === req.body.username;
    }).length > 0
  ) {
    res.send(
      JSON.stringify({
        success: false,
        message: "user already exists"
      })
    );
    return;
  }
  console.log("POST /user data:" + req.body.username);
  userList.push({ username: req.body.username });
  console.log(userList);
  res.send(JSON.stringify({ success: true }));
});
//---------------------------------------------------------------------------

// deleting a user
app.delete("/user", upload.none(), (req, res) => {
  console.log("DELETE /user data:" + req.body.user);
  let localUserList = userList.map(user => {
    return user.username;
  });
  let userIndex = localUserList.indexOf(req.body.user);

  console.log(userIndex);
  if (userIndex === -1) {
    res.send(
      JSON.stringify({
        success: false,
        message: "user does not exist"
      })
    );
    return;
  }
  userList.splice(userIndex, 1);

  let keys = Object.keys(groupList);
  keys.forEach(key => {
    let userIndexInGroup = groupList[key].indexOf(req.body.user);
    if (userIndexInGroup === -1) {
      return;
    }
    groupList[key].splice(userIndexInGroup, 1);
  });
  res.send(JSON.stringify({ success: true }));
});
//---------------------------------------------------------------------------

// group get,post,put
app.get("/group", (req, res) => {
  console.log("GET /group");
  let groupArray = Object.keys(groupList).map(key => {
    groupList[key];
    return { name: key, memberList: groupList[key] };
  });
  res.send(JSON.stringify({ success: true, data: { groupList: groupArray } }));
});
//---------------------------------------------------------------------------

// CREATING A GROUP
app.post("/group", upload.none(), (req, res) => {
  console.log("POST /group data:" + req.body.groupname);
  if (
    userList.filter(elem => {
      return elem.username === req.body.firstMember;
    }).length < 1
  ) {
    res.send(
      JSON.stringify({
        success: false,
        message: "user does not exist"
      })
    );
    return;
  }

  if (req.body.groupname.length >= 20) {
    res.send(
      JSON.stringify({
        success: false,
        message: "groupname length must be less than 20"
      })
    );
    return;
  }
  if (req.body.groupname.length < 1) {
    res.send(
      JSON.stringify({
        success: false,
        message: "groupname length must be at least 1 character"
      })
    );
    return;
  }
  groupList[req.body.groupname] = [req.body.firstMember];
  res.send(JSON.stringify({ success: true }));
});
//---------------------------------------------------------------------------

// EDITING A GROUP
app.put("/group", upload.none(), (req, res) => {
  console.log(
    "PUT /group data:" +
      req.body.type +
      " " +
      req.body.user +
      " " +
      req.body.group
  );
  if (
    userList.filter(elem => {
      return elem.username === req.body.user;
    }).length < 1
  ) {
    res.send(
      JSON.stringify({
        success: false,
        message: "user does not exist"
      })
    );
    return;
  }
  if (req.body.type === "add") {
    if (
      groupList[req.body.group].filter(elem => {
        return elem === req.body.user;
      }).length > 0
    ) {
      res.send(
        JSON.stringify({
          success: false,
          message: "user already in group"
        })
      );
      return;
    }
    groupList[req.body.group].push(req.body.user);
    res.send(JSON.stringify({ success: true }));
    return;
  }
  if (req.body.type === "remove") {
    groupList[req.body.group] = groupList[req.body.group].filter(elem => {
      return elem !== req.body.user;
    });
    if (groupList[req.body.group].length <= 0) {
      delete groupList[req.body.group];
    }
    res.send(JSON.stringify({ success: true }));
    return;
  }
  res.send(JSON.stringify({ success: true }));
});

//################################################
//test endpoint
app.get("/test", (req, res) => {
  console.log("GET");
  res.send(JSON.stringify({ success: true }));
});
app.post("/test", upload.none(), (req, res) => {
  console.log("POST");
  console.log(req.body.testdataa);
  res.send(JSON.stringify({ success: true }));
});
app.put("/test", upload.none(), (req, res) => {
  console.log("PUT");
  console.log(req.body.testdataa);
  res.send(JSON.stringify({ success: true }));
});
app.delete("/test", upload.none(), (req, res) => {
  console.log("DELETE");
  console.log(req.body.testdataa);
  res.send(JSON.stringify({ success: true }));
});

//_________________End of END POINTS____________________
app.listen(4000, "0.0.0.0", () => {
  // REMOTE SERVER/DROPLET
  console.log("Running on port 4000 , 0.0.0.0");
});
