import { TodoState } from "../types";

export const todoFetchEdit = async (id: number, updatedData: TodoState) => {
  try {
    const response = await fetch(
      `https://6692e4c3346eeafcf46e7db4.mockapi.io/api/gymbeam/todos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    console.log(`Todo ${id} edited successfully.`);
  } catch (error) {
    console.error("Err:", error);
  }
};
