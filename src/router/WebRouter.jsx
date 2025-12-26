import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoworkingSpacePage from "../pages/CoworkingSpacePage";
import useRouteMeta from "../hooks/useRouteMeta"
const WebRouter = () => {
  useRouteMeta();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkingSpace" element={<CoworkingSpacePage />} />
      </Routes>
    </>
  );
};
export default WebRouter;
