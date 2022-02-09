import {createContext} from "react";

function noop() {}
function loginNoop(jwtToken: string) {}

const AuthContext = createContext({
  token: null,
  login: loginNoop,
  logout: noop,
  isAuthenticated: false
})

export default AuthContext