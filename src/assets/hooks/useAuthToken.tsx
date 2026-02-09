import { useState, useEffect } from "react";

const TOKEN_KEY = "auth_token";

export function useAuthToken() {
  const [token, setToken] = useState<string>(() => {
    return localStorage.getItem(TOKEN_KEY) || "";
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  }, [token]);

  return { token, setToken  };
}
