import { $authHost } from "../../index.js";

export const fetchFeaturesOfFireExtinguishingComment = async (cardId) => {
  const { data } = await $authHost.get(
    `api/featuresOfFireExtinguishingComment/${cardId}`
  );
  return data;
};

export const updateFeaturesOfFireExtinguishingComment = async (
  cardId,
  updatingInfo
) => {
  const { data } = await $authHost.put(
    `api/featuresOfFireExtinguishingComment/${cardId}`,
    updatingInfo
  );
  return data;
};
