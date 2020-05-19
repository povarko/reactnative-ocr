import axios from "axios";

export const teamsService = {
  searchTeams,
  getTrackTeams,
  postTrackTeams,
  postTrackMultiTeams
};

async function searchTeams(pro, amateur, semiPro, sortBy, countryId) {
  const res = await axios.get("/teams/search", {
    params: {
      pro,
      amateur,
      semiPro,
      sortBy,
      countryId
    }
  });
  return res.data.data;
}

async function getTrackTeams() {
  const res = await axios.get("/users/teams");
  return res.data.data;
}

async function postTrackTeams(id) {
  return axios.post("/track/team", { id });
}

async function postTrackMultiTeams(ids) {
  return axios.post("/track/teams", { ids });
}
