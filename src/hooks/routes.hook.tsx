import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";

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
      <Route path="/*" element={<h1>Hello</h1>}/>
    </Routes>
  );
}

export default useRoutes;