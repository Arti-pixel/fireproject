import { $authHost } from "../../index.js";

export const fetchWaterSupplyComment = async (cardId) => {
  const { data } = await $authHost.get(`api/waterSupplyComment/${cardId}`);
  return data;
};

export const updateWaterSupplyComment = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/waterSupplyComment/${cardId}`,
    updatingInfo
  );
  return data;
};
