import { $authHost } from "../../index";

export const fetchWaterSupply = async (cardId) => {
  const { data } = await $authHost.get(`api/waterSupply/${cardId}`);
  return data;
};

export const updateWaterSupply = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/waterSupply/${cardId}`,
    updatingInfo
  );
  return data;
};
