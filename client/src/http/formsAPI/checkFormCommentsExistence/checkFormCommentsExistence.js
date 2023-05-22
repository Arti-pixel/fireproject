import { $authHost } from "../../index.js";

export const checkCommentsExistence = async (cardId) => {
  const { data } = await $authHost.get(
    `api/allTables/commentsExistence/${cardId}`
  );
  return data;
};
