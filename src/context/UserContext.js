import React from "react";
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "../api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function autoLogin() {
      const token = await window.localStorage.getItem("token");

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) throw new Error("Token inválido");

          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }

    autoLogin();
  }, []);

  async function getUser(token) {
    const { url, options } = await USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    const { url, options } = await TOKEN_POST({ username, password });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();

    window.localStorage.setItem("token", token);
    getUser(token);
  }

  async function userLogout() {
    setData(null);
    setError(null);
    setLogin(false);
    setLoading(false);
    await window.localStorage.removeItem("token");
  }

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data }}>
      {children}
    </UserContext.Provider>
  );
};
