const axios = require("axios");

const enrichName = async (name) => {
  const res = await axios.get(`https://api.nationalize.io?name=${name}`);
  if (!res.data.country.length) return null;

  const top = res.data.country[0];
  return {
    country: top.country_id,
    probability: top.probability
  };
};

module.exports = enrichName;
