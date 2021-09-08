const request = require("supertest");
const app = require("../server");

const { connect, clear, close } = require("./db");

beforeAll(async () => await connect());

afterEach(async () => await clear());

afterAll(async () => await close());

describe("Fruit update endpoint", () => {
  it("Should create fruits and update one", async () => {
    // First,
    const bodyCreate = {
      fruits: [
        { name: "apple", size: "small" },
        { name: "banana", size: "medium" },
      ],
    };
    const resCreate = await request(app).post("/api/fruit/me").send(bodyCreate);
    expect(resCreate.body.length).toBe(bodyCreate.fruits.length);

    const idUpdate = resCreate.body[0]._id;
    const bodyUpdate = {
      eatenStatus: true,
      eatenDate: new Date(),
    };
    const resUpdate = await request(app)
      .put(`/api/fruit/me/${idUpdate}`)
      .send(bodyUpdate);
    expect(resUpdate.body.eatenStatus).toBe(true);
  });
});
