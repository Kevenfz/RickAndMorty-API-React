import { api } from "./api";

export const infoId = {
    infos: (id: number) => api.get(`/character/${id}`)
}