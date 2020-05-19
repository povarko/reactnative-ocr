import axios from "axios";

export const athletesService = {
  searchAthletes,
  getTrackAthletes,
  postTrackAthletes,
  postTrackMultiAthletes
};

async function searchAthletes(pro, amateur, semiPro, sortBy, countryId) {
  const res = await axios.get("/athletes/search", {
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

async function getTrackAthletes() {
  const res = await axios.get("/users/athletes");
  return res.data.data;
}
async function postTrackAthletes(id) {
  return axios.post("/track/athlete", { id });
}

async function postTrackMultiAthletes(ids) {
  return axios.post("/track/athletes", { ids });
}
