import axios from "axios";

export const sportsService = {
  getAllSports,
  getPopularSports
};

async function getAllSports() {
  const res = await axios.get("/sports/all");
  return res.data.data;
}

async function getPopularSports() {
  const res = await axios.get("/sports/popular");
  return res.data.data;
}
