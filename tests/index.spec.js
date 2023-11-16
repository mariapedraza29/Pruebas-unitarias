import { request } from "express";
import app from "../src/app";
import {describe } from ""

describe("GET /tasks", async() => {
    test('should respon wuth a 200 status code', () => {
        const response = await request(app).get('/tasks').send();
        expect(response.statusCode).toBe(200);
    });
});