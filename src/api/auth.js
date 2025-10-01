export const login = async (username, password) => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.accessToken); 
  
      return data;
    } catch (err) {
      console.error("Login failed:", err);
      throw new Error("Invalid credentials");
    }
  }