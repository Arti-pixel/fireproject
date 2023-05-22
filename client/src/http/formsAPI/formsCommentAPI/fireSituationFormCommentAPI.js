import { $authHost } from "../../index.js";

export const fetchFireSituationComment = async (cardId) => {
  const { data } = await $authHost.get(`api/fireSituationComment/${cardId}`);
  return data;
};

export const updateFireSituationComment = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/fireSituationComment/${cardId}`,
    updatingInfo
  );
  return data;
};
