import authReducer from "./auth/reducer";
import sportsReducer from "./sports/reducer";
import teamsReducer from "./team/reducer";
import athletesReducer from "./athlete/reducer";

export default {
  auth: authReducer,
  sports: sportsReducer,
  teams: teamsReducer,
  athletes: athletesReducer
};
