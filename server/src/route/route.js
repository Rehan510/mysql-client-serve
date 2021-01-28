const express = require("express");
const router = express.Router();
const {
  postData,
  getDataa,
  getData,
  updatee,
  deleteData,
} = require("../component/component");

router.post("/user", postData);
router.get("/user", getDataa);
router.get("/user/:id", getData);
router.delete("/user/:id", deleteData);
router.put("/user", updatee);

module.exports = router;
