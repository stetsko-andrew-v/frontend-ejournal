import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import TimeTablePage from "../pages/TimeTablePage";

const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/*" element={<HomePage/>}/>
        <Route path="/timetable/*" element={<TimeTablePage/>}/>
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