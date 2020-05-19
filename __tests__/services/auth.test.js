import moment from "moment";
import { authService } from "@AppServices";
import expect from "expect";

describe("isTokenExpired", () => {
  it("correctly detects expired tokens", () => {
    const pastTime = moment("2011-01-01 00:00Z");
    expect(authService.isTokenExpired(pastTime)).toBe(true);
  });

  it("correctly detects active tokens", () => {
    const current = moment();
    expect(authService.isTokenExpired(current)).toBe(false);
  });

  it("expires tokens 5 seconds from expiration", () => {
    let limitInMinutes = 10;
    let transitMinutes = 0.5;
    let adjustedTimeSeconds = (limitInMinutes - transitMinutes) * 1000;
    let current = moment().subtract(adjustedTimeSeconds, "seconds");
    expect(authService.isTokenExpired(current)).toBe(true);
  });
});
