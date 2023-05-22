import { $authHost } from "../../index";

export const fetchFireResults = async (cardId) => {
  const { data } = await $authHost.get(`api/fireResults/${cardId}`);
  return data;
};

export const updateFireResults = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/fireResults/${cardId}`,
    updatingInfo
  );
  return data;
};
