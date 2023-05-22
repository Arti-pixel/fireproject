import { $authHost } from "../../index.js";

export const fetchGeneralComment = async (cardId) => {
  const { data } = await $authHost.get(`api/generalComment/${cardId}`);
  return data;
};

export const updateGeneralComment = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/generalComment/${cardId}`,
    updatingInfo
  );
  return data;
};
