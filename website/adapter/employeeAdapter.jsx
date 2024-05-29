import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/employee";

export const createEmployee = async ({
  username,
  password,
  firstName,
  lastName,
  company,
  imageUrl
}) =>
  fetchHandler(
    baseUrl,
    getPostOptions({
      username,
      password,
      is_rep,
      firstName,
      lastName,
      company,
      imageUrl
    })
  );