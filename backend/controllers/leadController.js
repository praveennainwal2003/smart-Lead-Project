const Lead = require("../models/Lead");
const enrichName = require("../services/nationalizeService");

exports.processLeads = async (req, res) => {
  const names = req.body.names;

  const promises = names.map(async (name) => {
    const data = await enrichName(name);
    if (!data) return null;

    const status = data.probability > 0.6 ? "Verified" : "To Check";

    return Lead.create({
      name,
      country: data.country,
      probability: data.probability,
      status
    });
  });

  await Promise.all(promises);
  res.json({ message: "Leads processed" });
};

exports.getLeads = async (req, res) => {
  const status = req.query.status;
  const filter = status ? { status } : {};
  const leads = await Lead.find(filter);
  res.json(leads);
};
