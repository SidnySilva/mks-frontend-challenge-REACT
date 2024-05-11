// // products.test.ts
// import { renderHook } from "@testing-library/react-hooks";
// import { useQueryClient } from "react-query";
// import { useGet } from "../queries/products";
// import { fetchProducts } from "../services/api";

// jest.mock("../services/api");
// jest.mock("react-query");

// describe("useGet", () => {
//   it("returns loading state correctly", async () => {
//     const queryClientMock = { isLoading: true, error: null, data: null };
//     (useQueryClient as jest.MockedFunction<typeof useQueryClient>).mockReturnValue(queryClientMock);

//     const { result, waitForNextUpdate } = renderHook(() => useGet());

//     expect(result.current.isLoading).toBe(true);

//     await waitForNextUpdate();

//     expect(result.current.isLoading).toBe(false);
//   });

//   it("returns data correctly", async () => {
//     const mockData = [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }];
//     const queryClientMock = { isLoading: false, error: null, data: mockData };
//     (useQueryClient as jest.MockedFunction<typeof useQueryClient>).mockReturnValue(queryClientMock);

//     const { result, waitForNextUpdate } = renderHook(() => useGet());

//     await waitForNextUpdate();

//     expect(result.current.data).toEqual(mockData);
//   });

//   it("returns error correctly", async () => {
//     const errorMessage = "Error fetching data";
//     const queryClientMock = { isLoading: false, error: new Error(errorMessage), data: null };
//     (useQueryClient as jest.MockedFunction<typeof useQueryClient>).mockReturnValue(queryClientMock);

//     const { result, waitForNextUpdate } = renderHook(() => useGet());

//     await waitForNextUpdate();

//     expect(result.current.error?.message).toBe(errorMessage);
//   });
// });
