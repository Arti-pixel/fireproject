import { $authHost } from "../../index.js";

export const fetchApplicationNameComment = async (cardId) => {
  const { data } = await $authHost.get(`api/applicationNameComment/${cardId}`);
  return data;
};

export const updateApplicationNameComment = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/applicationNameComment/${cardId}`,
    updatingInfo
  );
  return data;
};
