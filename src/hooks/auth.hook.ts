import {useCallback, useEffect, useState} from "react";

const useAuth = () => {
  const [token, setToken] = useState(null);

  const storageName = 'userData';

  const login = useCallback((jwtToken) => {
    setToken(jwtToken);

    console.log(jwtToken)

    localStorage.setItem(storageName, JSON.stringify({ token: jwtToken }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);

    localStorage.removeItem(storageName);
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName) || '{}');

    if (data && data.token) {
      login(data.token);
    }
  }, [login]);

  return { login, token, logout };
}

export default useAuth;