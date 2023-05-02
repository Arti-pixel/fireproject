import { $authHost } from "../index";

export const fetchFireTimeindicators = async (cardId) => {
  const { data } = await $authHost.get(`api/fireTimeindicators/${cardId}`);
  return data;
};

export const updateFireTimeindicators = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/fireTimeindicators/${cardId}`,
    updatingInfo
  );
  return data;
};
