import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className=" mx-auto min-w-[350px] flex justify-center">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
