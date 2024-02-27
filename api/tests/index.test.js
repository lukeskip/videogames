const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Probamos el detalle de videojuego ", () => {
  it("Debe regresar un objeto al encontrar un videojuego", async () => {
    const request = await agent.get("/videogames/1");
    expect(request.body.name).toBeTruthy();
  });

  it("Debe regresar un error 404 al no encontrar el videojuego", async () => {
    const request = await agent.get("/videogames/22eer");
    expect(request.status).toBe(404);
  });
});
