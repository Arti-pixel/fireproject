import { $authHost } from "../../index";

export const fetchReportConclusion = async (cardId) => {
  const { data } = await $authHost.get(`api/reportConclusion/${cardId}`);
  return data;
};

export const updateReportConclusion = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/reportConclusion/${cardId}`,
    updatingInfo
  );
  return data;
};
