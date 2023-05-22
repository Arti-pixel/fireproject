import { $authHost } from "../../index.js";

export const fetchActionsEvaluationComment = async (cardId) => {
  const { data } = await $authHost.get(
    `api/actionsEvaluationComment/${cardId}`
  );
  return data;
};

export const updateActionsEvaluationComment = async (cardId, updatingInfo) => {
  const { data } = await $authHost.put(
    `api/actionsEvaluationComment/${cardId}`,
    updatingInfo
  );
  return data;
};
