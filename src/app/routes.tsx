import { createHashRouter } from "react-router";
import MobileLayout from "./components/MobileLayout";
import HomeScreen from "./screens/HomeScreen";
import FacultyDetailsScreen from "./screens/FacultyDetailsScreen";

export const router = createHashRouter([
  {
    path: "/",
    Component: MobileLayout,
    children: [
      { index: true, Component: HomeScreen },
      { path: "home", Component: HomeScreen },
      { path: "faculty/:code", Component: FacultyDetailsScreen },
    ],
  },
]);
