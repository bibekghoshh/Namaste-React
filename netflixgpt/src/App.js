import Login from "./components/Login";
import Browse from "./components/Browse";
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {

  const router= createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"browse",
      element:<Browse/>
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
