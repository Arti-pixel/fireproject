import { $authHost } from "./index";
import randomstring from "randomstring";

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

export const getRecordsPdf = async (cardId) => {
  await $authHost
    .get(`api/pdf/${cardId}`, { responseType: "blob" })
    .then((response) => {
      return new Blob([response.data], { type: "application/pdf" });
    })
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${randomstring.generate()}.pdf`;
      link.click();
      URL.revokeObjectURL(url); // Очистить URL после скачивания файла
    })
    .catch((error) => {
      console.error("Ошибка при загрузке файла:", error);
    });
};
