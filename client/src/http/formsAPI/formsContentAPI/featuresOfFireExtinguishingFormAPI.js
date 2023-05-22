import { $authHost } from "../../index";

export const fetchFeaturesOfFireExtinguishing = async (cardId) => {
  const { data } = await $authHost.get(
    `api/featuresOfFireExtinguishing/${cardId}`
  );
  return data;
};

export const updateFeaturesOfFireExtinguishing = async (
  cardId,
  updatingInfo
) => {
  const { data } = await $authHost.put(
    `api/featuresOfFireExtinguishing/${cardId}`,
    updatingInfo
  );
  return data;
};
