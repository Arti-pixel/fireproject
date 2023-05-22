import { $authHost } from "../../index.js";

export const fetchFireExtinguishPersonnelComment = async (cardId) => {
  const { data } = await $authHost.get(
    `api/fireExtinguishPersonnelComment/${cardId}`
  );
  return data;
};

export const updateFireExtinguishPersonnelComment = async (
  cardId,
  updatingInfo
) => {
  const { data } = await $authHost.put(
    `api/fireExtinguishPersonnelComment/${cardId}`,
    updatingInfo
  );
  return data;
};
