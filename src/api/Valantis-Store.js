import { executeRequest } from "../utils/helpers";

export const getAllBrands = async () => {
  const params = {
    action: "get_fields",
    params: { field: "brand" },
  };

  const response = await executeRequest(params);

  const uniqueArray = [...new Set(response)].filter((item) => item !== null);
  return uniqueArray;
};

export const getFields = async () => {
  const params = {
    action: "get_fields",
  };

  const response = await executeRequest(params);
  return response;
};

export const getFiftyIds = async (page, rowsPerPage) => {
  const offset = page === 0 ? 0 : page * 50;
  const extraRows = rowsPerPage === 100 ? 0 : rowsPerPage / 5;

  const params = {
    action: "get_ids",
    params: { offset, limit: rowsPerPage + extraRows },
  };

  const response = await executeRequest(params);

  return [...new Set(response)].filter(
    (value, index, self) => self.indexOf(value) === index,
  );
};

export const getProducts = async (page, rowsPerPage, idsAfterFilter) => {
  let ids;

  if (idsAfterFilter === undefined) {
    ids = await getFiftyIds(page, rowsPerPage);
  } else {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    ids = idsAfterFilter.slice(startIndex, endIndex);
  }

  const params = {
    action: "get_items",
    params: { ids: ids },
  };

  const response = await executeRequest(params);

  return [...new Set(response)]
    .filter(
      (obj, index, self) => index === self.findIndex((el) => el.id === obj.id),
    )
    .slice(0, rowsPerPage);
};

export const getFilteredProducts = async (filteredBy, filterValue) => {
  const params = {
    action: "filter",
    params: { [filteredBy]: filterValue },
  };

  const response = await executeRequest(params);
  return response;
};
