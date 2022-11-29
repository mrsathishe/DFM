import { createBrowserRouter } from "react-router-dom";
import App from '../App';
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
          path: "",
          element: <Home />
        },
        {
          path: "",
          element: (<></>)
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
]);

export default RouterMenu;