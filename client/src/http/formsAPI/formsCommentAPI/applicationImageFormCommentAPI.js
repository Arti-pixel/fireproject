import { $authHost } from "../../index.js";

export const fetchApplicationImageComment = async (cardId) => {
  const { data } = await $authHost.get(`api/applicationImageComment/${cardId}`);
  return data;
};

export const updateApplicationImageComment = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/applicationImageComment/${cardId}`,
    updatingInfo
  );
  return data;
};
