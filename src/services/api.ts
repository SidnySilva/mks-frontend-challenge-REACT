import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=9&sortBy=id&orderBy=ASC"
  );
  return response.data;
};
