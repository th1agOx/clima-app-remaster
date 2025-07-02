import axios from "axios";
import { BaseUrl } from "../../config/env";

describe(" ... ", () => {
  test("Deve retornar status 200 ao acessar o registro NPM", async () => {
    const response = await axios.get(BaseUrl);
    expect(response.status).toBe(200);
  });
});