import { $authHost } from "../../index.js";

export const fetchFireResultsComment = async (cardId) => {
  const { data } = await $authHost.get(`api/fireResultsComment/${cardId}`);
  return data;
};

export const updateFireResultsComment = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/fireResultsComment/${cardId}`,
    updatingInfo
  );
  return data;
};
