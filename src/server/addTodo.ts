import { TodoState } from "../types";

export const todoFetchAdd = async (newData: any) => {
  try {
    const response = await fetch(
      `https://6692e4c3346eeafcf46e7db4.mockapi.io/api/gymbeam/todos`,
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Err:", error);
  }
};
