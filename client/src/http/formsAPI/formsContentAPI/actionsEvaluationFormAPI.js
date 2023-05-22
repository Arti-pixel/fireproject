import { $authHost } from "../../index";

export const fetchActionsEvaluation = async (cardId) => {
  const { data } = await $authHost.get(`api/actionsEvaluation/${cardId}`);
  return data;
};

export const updateActionsEvaluation = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/actionsEvaluation/${cardId}`,
    updatingInfo
  );
  return data;
};
