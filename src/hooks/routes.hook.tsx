import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import TimeTablePage from "../pages/TimeTablePage";
import BlogPage from "../pages/BlogPage";

const useRoutes = (isAuthenticated: boolean) => {
      if (isAuthenticated) {
          return (
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/timetable/*" element={<TimeTablePage/>}/>
                  <Route path="/blog" element={<BlogPage/>}/>
                  <Route path="/*" element={<Navigate to={'/'}/>}/>
              </Routes>
          );
      }

      return (
          <Routes>
              <Route path="/" element={<BlogPage/>}/>
              <Route path="/login/*" element={<LoginPage/>}/>
              <Route path="/*" element={<Navigate to={'/'}/>}/>
          </Routes>
      );
}

export default useRoutes;