import { instance } from "./appi";

export const getApiCarsCatalog = async () => {
    const { data } = await instance.get('/cars');
   
    return data;
  };