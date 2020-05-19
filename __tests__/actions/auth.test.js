import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import actionTypes from "@AppRedux/actionTypes";
import expect from "expect";
import { authActions } from "@AppRedux/actions";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import moment from "moment";

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Redux actions", () => {
  describe("refreshToken", () => {
    afterEach(() => {
      mock.restore();
    });

    it("should refresh an expired token", () => {
      const response = {
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5c",
        refreshToken: "cc0e6e8e-0e58-4bd2-b30a-8c3c"
      };

      mock.onPost("/auth/token/refresh").reply(200, { data: response });

      const store = mockStore({
        user: {
          user: { email: "abc@gmail.com" },
          accessToken: "ZjNmZTcifQ.dZgYPnFZgw8Z71",
          refreshToken: "2OTM0NDI4Niwic3ViIjoiY2",
          tokenTimestamp: moment().subtract(10, "minutes")
        }
      });

      return store.dispatch(authActions.refreshToken()).then(() => {
        expect(store.getActions()).toHaveLength(1);
      });
    });

    it("should not refresh active token", () => {
      const response = {
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5c",
        refreshToken: "cc0e6e8e-0e58-4bd2-b30a-8c3c"
      };

      mock.onPost("/auth/token/refresh").reply(200, { data: response });

      const store = mockStore({
        user: {
          user: { email: "abc@gmail.com" },
          accessToken: "ZjNmZTcifQ.dZgYPnFZgw8Z71",
          refreshToken: "2OTM0NDI4Niwic3ViIjoiY2",
          tokenTimestamp: moment()
        }
      });

      return store.dispatch(authActions.refreshToken()).then(() => {
        expect(store.getActions()).toHaveLength(0);
      });
    });
  });
});
