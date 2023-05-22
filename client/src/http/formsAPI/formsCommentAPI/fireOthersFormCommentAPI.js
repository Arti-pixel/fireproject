import { $authHost } from "../../index.js";

export const fetchFireOthersComment = async (cardId) => {
  const { data } = await $authHost.get(`api/fireOthersComment/${cardId}`);
  return data;
};

export const updateFireOthersComment = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/fireOthersComment/${cardId}`,
    updatingInfo
  );
  return data;
};
