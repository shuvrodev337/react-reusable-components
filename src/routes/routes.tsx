import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminLayout from "../components/layout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // other way of saying path:"/"
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true, // other way of saying path:"/admin"
        element: <h1>This is Admin Dashboard</h1>,
      },
      {
        path: "add-admin",
        element: <h1>This is Addd Admin</h1>,
      },
    ],
  },
]);
export default router;
