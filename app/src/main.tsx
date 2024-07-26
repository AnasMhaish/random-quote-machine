import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/random-quote-machine/",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
      <RouterProvider router={router}/>
  </React.Fragment>
);
