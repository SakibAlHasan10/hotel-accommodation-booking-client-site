import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router/Router";
import AuthProvider from "./AuthProvider/AuthProvider";
import { ParallaxProvider } from "react-scroll-parallax";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ParallaxProvider scrollAxis="horizontal">
        <RouterProvider router={router} />
        <Toaster
         position="top-center"
        />
      </ParallaxProvider>
    </AuthProvider>
  </React.StrictMode>
);
