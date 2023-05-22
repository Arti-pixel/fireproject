import { $authHost } from "../../index";

export const fetchFireExtinguishPersonnel = async (cardId) => {
  const { data } = await $authHost.get(`api/fireExtinguishPersonnel/${cardId}`);
  return data;
};

export const updateFireExtinguishPersonnel = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/fireExtinguishPersonnel/${cardId}`,
    updatingInfo
  );
  return data;
};
