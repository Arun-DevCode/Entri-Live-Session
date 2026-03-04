export const getAllTasks = async () => {
  try {
    const response = await fetch(
      "http://localhost:4000/api/task/get-all-tasks",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // If you use JWT authentication, add it here:
          // 'Authorization': `Bearer ${token}`
        },
      },
    );

    // Check if the server responded
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json(); // Conversion JSON -> Object

    return result.data;
  } catch (error) {
    console.error("Failed to fetch tasks:", error.message);
    return null;
  }
};
