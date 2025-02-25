export async function storeUser(user) {
    try {
      const response = await fetch("http://localhost:1337/api/user-profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: user.name,
            email: user.email,
            bio: "",
          },
        }),
      });
  
      if (!response.ok) {
        console.error("Failed to store user:", await response.json());
        return null;
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error storing user:", error);
      return null;
    }
  }
  