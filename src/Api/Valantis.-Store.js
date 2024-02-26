import axios from "axios";
import md5 from "blueimp-md5";
import { apiUrl, password } from "../utils/consts";

// Текущая дата
const timestamp = new Date().toISOString().split("T")[0].replace(/-/g, "");

// Формирование авторизационной строки
const authString = md5(`${password}_${timestamp}`);

// Выполнение запроса к API
export const getAllBrands = async () => {
  let arr = [];

  let retry = true;
  let retryCount = 0;

  //повторяем запрос, максимум 3 раза, что-бы не Ddos'ить сервер
  while (retry && retryCount < 3) {
    try {
      const response = await axios.post(
        apiUrl,
        {
          action: "get_fields",
          params: { field: "brand" },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": authString,
          },
        },
      );

      arr = response.data.result;

      //если успешно - прекращаем запросы
      retry = false;
    } catch (error) {
      if (error.response) {
        console.log("Id Error:", error.response.data);
        console.log("HTTP Error:", error.response.status);
      } else {
        console.log("Error:", error.message);
      }

      console.log("Retrying...");

      retryCount += 1;

      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
  const uniqueArray = [...new Set(arr)].filter((item) => item !== null);
  return uniqueArray;
};

export const getFields = async () => {
  let arr = [];

  let retry = true;
  let retryCount = 0;

  while (retry && retryCount < 3) {
    try {
      const response = await axios.post(
        apiUrl,
        {
          action: "get_fields",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": authString,
          },
        },
      );

      arr = response.data.result;

      retry = false;
    } catch (error) {
      if (error.response) {
        console.log("Id Error:", error.response.data);
        console.log("HTTP Error:", error.response.status);
      } else {
        console.log("Error:", error.message);
      }

      console.log("Retrying...");

      retryCount += 1;

      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }

  return arr;
};

export const getFiftyIds = async (page, rowsPerPage) => {
  //определяем смещение запроса
  const offset = page === 0 ? 0 : page * 50;

  //добавляем "экстра" строки для заполнения вывода, после очистки дубликатов
  const extraRows = rowsPerPage === 100 ? 0 : rowsPerPage / 5;

  let arr = [];

  let retry = true;
  let retryCount = 0;

  while (retry && retryCount < 3) {
    try {
      const response = await axios.post(
        apiUrl,
        {
          action: "get_ids",
          params: { offset, limit: rowsPerPage + extraRows },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": authString,
          },
        },
      );

      arr = response.data.result.filter(
        (value, index, self) => self.indexOf(value) === index,
      );

      retry = false;
    } catch (error) {
      if (error.response) {
        console.log("Id Error:", error.response.data);
        console.log("HTTP Error:", error.response.status);
      } else {
        console.log("Error:", error.message);
      }

      console.log("Retrying...");

      retryCount += 1;

      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }

  return arr;
};

export const getProducts = async (page, rowsPerPage, idsAfterFilter) => {
  let arr = [];

  let ids;
  if (idsAfterFilter === undefined) {
    ids = await getFiftyIds(page, rowsPerPage);
  } else {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    ids = idsAfterFilter.slice(startIndex, endIndex);
  }

  let retry = true;
  let retryCount = 0;

  while (retry && retryCount < 3) {
    try {
      const response = await axios.post(
        apiUrl,
        {
          action: "get_items",
          params: { ids: ids },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": authString,
          },
        },
      );

      //удаляем дубликаты карточек
      arr = response.data.result.filter((obj, index, self) => {
        return index === self.findIndex((el) => el.id === obj.id);
      });

      retry = false;
    } catch (error) {
      if (error.response) {
        console.log("Id Error:", error.response.data);
        console.log("HTTP Error:", error.response.status);
      } else {
        console.log("Error:", error.message);
      }

      console.log("Retrying...");

      retryCount += 1;

      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
  return arr.slice(0, rowsPerPage);
};

export const getFilteredProducts = async (filteredBy, filterValue) => {
  let arr = [];
  const params = {
    [filteredBy]: filterValue,
  };

  let retry = true;
  let retryCount = 0;

  while (retry && retryCount < 3) {
    try {
      const response = await axios.post(
        apiUrl,
        {
          action: "filter",
          params,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": authString,
          },
        },
      );

      arr = response.data.result;

      retry = false;
    } catch (error) {
      if (error.response) {
        console.log("Id Error:", error.response.data);
        console.log("HTTP Error:", error.response.status);
      } else {
        console.log("Error:", error.message);
      }

      console.log("Retrying...");

      retryCount += 1;

      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
  return arr;
};
