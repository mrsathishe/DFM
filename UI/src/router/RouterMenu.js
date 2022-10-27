import { createBrowserRouter } from "react-router-dom";
import App from '../App';

const RouterMenu = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
]);

export default RouterMenu;