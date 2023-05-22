import { $authHost } from "../../index.js";

export const fetchReportConclusionComment = async (cardId) => {
  const { data } = await $authHost.get(`api/reportConclusionComment/${cardId}`);
  return data;
};

export const updateReportConclusionComment = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/reportConclusionComment/${cardId}`,
    updatingInfo
  );
  return data;
};
