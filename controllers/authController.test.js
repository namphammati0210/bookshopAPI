const request = require("supertest");

const app = require("../app");
const DB = require("../database/connect");

const MOCK_USER_DATA = {
  email: "nampt4@gmail.com",
  password: "123456",
  fullname: "nampt_test",
  role: "admin",
};

beforeAll(() => {
  DB.connectDatabase();
});

afterAll(() => {
  DB.disconnectDatabase();
});

describe("POST /auth/register ", () => {
  test("return response status is 200", async () => {
    const response = await request(app)
      .post("/auth/register")
      .send(MOCK_USER_DATA)
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.email).tobe(MOCK_USER_DATA.email);
  });
});
