import { $authHost } from "../index";

export const fetchGeneral = async (cardId) => {
  const { data } = await $authHost.get(`api/general/${cardId}`);
  return data;
};

export const updateGeneral = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(`api/general/${cardId}`, updatingInfo);
  return data;
};
