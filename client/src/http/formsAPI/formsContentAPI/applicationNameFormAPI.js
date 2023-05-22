import { $authHost } from "../../index";

export const fetchApplicationName = async (cardId) => {
  const { data } = await $authHost.get(`api/applicationName/${cardId}`);
  return data;
};

export const updateApplicationName = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/applicationName/${cardId}`,
    updatingInfo
  );
  return data;
};
