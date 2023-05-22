import { $authHost } from "../../index";

export const fetchFireSituation = async (cardId) => {
  const { data } = await $authHost.get(`api/fireSituation/${cardId}`);
  return data;
};

export const updateFireSituation = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/fireSituation/${cardId}`,
    updatingInfo
  );
  return data;
};
