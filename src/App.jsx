import { RouterProvider } from "react-router-dom";
import { routes } from "./router/Router";

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
