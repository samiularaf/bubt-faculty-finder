import { createHashRouter } from "react-router";
import MobileLayout from "./components/MobileLayout";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import FacultyDetailsScreen from "./screens/FacultyDetailsScreen";

export const router = createHashRouter([
  {
    path: "/",
    Component: MobileLayout,
    children: [
      { index: true, Component: SplashScreen },
      { path: "login", Component: LoginScreen },
      { path: "home", Component: HomeScreen },
      { path: "faculty/:code", Component: FacultyDetailsScreen },
    ],
  },
]);
