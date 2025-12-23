const router = require("express").Router();
const { processLeads, getLeads } = require("../controllers/leadController");

router.post("/process", processLeads);
router.get("/", getLeads);

module.exports = router;
