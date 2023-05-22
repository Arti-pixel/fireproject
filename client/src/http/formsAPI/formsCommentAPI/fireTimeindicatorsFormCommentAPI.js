import { $authHost } from "../../index.js";

export const fetchFireTimeindicatorsComment = async (cardId) => {
  const { data } = await $authHost.get(
    `api/fireTimeindicatorsComment/${cardId}`
  );
  return data;
};

export const updateFireTimeindicatorsComment = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/fireTimeindicatorsComment/${cardId}`,
    updatingInfo
  );
  return data;
};
