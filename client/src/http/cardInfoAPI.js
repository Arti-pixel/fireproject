import { $authHost } from "./index";

export const createAllTables = async (record) => {
  const { data } = await $authHost.post("api/allTables", record);
  return data;
};

export const fetchRecords = async (filterPropeties, page, limit = 5) => {
  const { data } = await $authHost.get("api/general", {
    params: {
      filterPropeties,
      page,
      limit,
    },
  });
  return data;
};

export const deleteRecord = async (cardId) => {
  const { data } = await $authHost.delete(`api/general/${cardId}`);
  return data;
};
