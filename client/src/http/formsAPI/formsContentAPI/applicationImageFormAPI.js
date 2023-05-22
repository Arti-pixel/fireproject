import { $authHost } from "../../index";

export const fetchApplicationImage = async (cardId) => {
  const { data } = await $authHost.get(`api/applicationImage/${cardId}`);
  return data;
};

export const updateApplicationImage = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/applicationImage/${cardId}`,
    updatingInfo
  );
  return data;
};

export const deleteApplicationImage = async (cardId, applicationImageId) => {
  const { data } = await $authHost.delete(
    `api/applicationImage/${cardId}?applicationImageId=${applicationImageId}`
  );
  return data;
};

export const createApplicationImage = async (cardId) => {
  const { data } = await $authHost.post(`api/applicationImage/${cardId}`);
  return data;
};
