const API_BASE_URL = "https://6af816649bdd097c326e9204.mockapi.io"; 

export async function registerUser(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Conversion : Object -> JSON
    });

    // Data Conversion: JSON -> Object
    const data = await response.json();

    if (!response.ok) {
      // Throw an error with the backend's message if request failed
      throw new Error(data.message || "Registration failed");
    }

    return { success: true, data };
  } catch (error) {
    console.error("API Error:", error.message);
    return { success: false, message: error.message };
  }
}