export const todoFetchDelete = async (id: number) => {
  try {
    const response = await fetch(
      `https://6692e4c3346eeafcf46e7db4.mockapi.io/api/gymbeam/todos/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    console.log(`Todo with id ${id} deleted successfully.`);
  } catch (error) {
    console.error("Err:", error);
  }
};
