import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import CowDetails from "../containers/CowDetails";
import Home from "../containers/Home";
import Login from "../containers/Login";
import RequireAuth from './RequireAuth';

const RouterMenu = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <App />
        </RequireAuth>
      ),
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "",
          element: <CowDetails />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
]);

export default RouterMenu;