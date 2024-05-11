import { useQuery } from "react-query";
import { fetchProducts } from "../services/api";

export const useGet = () => {
  const { isLoading, error, data } = useQuery("data", fetchProducts);

  return {
    isLoading,
    error,
    data,
  };
};
