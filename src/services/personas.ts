import { api } from "./api";

export const personaService = {
  personasList: () =>
    api.get("/character"),
};
