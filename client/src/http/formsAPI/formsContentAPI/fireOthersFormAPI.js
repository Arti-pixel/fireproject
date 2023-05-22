import { $authHost } from "../../index";

export const fetchFireOthers = async (cardId) => {
  const { data } = await $authHost.get(`api/fireOthers/${cardId}`);
  return data;
};

export const updateFireOthers = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/fireOthers/${cardId}`,
    updatingInfo
  );
  return data;
};
