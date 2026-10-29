
const { test } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../src/app");

test("GET / should return the home page", async () => {
  const response = await request(app).get("/");

  assert.equal(response.status, 200);
  assert.match(
    response.text,
    /Welcome to My Node\.js Web Application!/
  );
});

test("GET /health should return healthy status", async () => {
  const response = await request(app).get("/health");

  assert.equal(response.status, 200);
  assert.equal(response.body.status, "UP");
});
