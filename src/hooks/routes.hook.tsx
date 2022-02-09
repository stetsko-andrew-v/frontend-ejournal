import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/*" element={<HomePage/>}/>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/*" element={<LoginPage/>}/>
    </Routes>
  );
}

export default useRoutes;