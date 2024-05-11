// api.test.ts
import axios from "axios";
import { fetchProducts } from "../src/services/api";

jest.mock("axios");

describe("fetchProducts", () => {
  it("fetches products successfully", async () => {
    const mockData = [
      {
        brand: "Apple",
        createdAt: "2023-10-30T16:25:01.093Z",
        description:
          "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
        id: 1,
        name: "Iphone 11 128 GB",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
        price: "5000.00",
        updatedAt: "2023-10-30T16:25:01.093Z",
      },
      {
        brand: "Apple",
        createdAt: "2023-10-30T16:25:01.093Z",
        description:
          "Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.",
        id: 2,
        name: "AirPods",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
        price: "1200.00",
        updatedAt: "2023-10-30T16:25:01.093Z",
      },
    ];
    const response = { data: mockData };
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
      response
    );

    const data = await fetchProducts();

    expect(data).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=9&sortBy=id&orderBy=ASC"
    );
  });

  it("handles fetch error", async () => {
    const errorMessage = "Network Error";
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(
      new Error(errorMessage)
    );

    await expect(fetchProducts()).rejects.toThrow(errorMessage);
  });
});
