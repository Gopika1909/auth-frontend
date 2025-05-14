import Auth from './pages/auth';
import Main from './pages/Main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/home",
    element: <Main />,
  },
]);

function App() {
  return (
    <div className="bg-custom-bg min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
