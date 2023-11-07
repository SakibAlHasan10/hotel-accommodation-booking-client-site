import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router/Router";
import AuthProvider from "./AuthProvider/AuthProvider";
import { ParallaxProvider } from "react-scroll-parallax";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ParallaxProvider scrollAxis="horizontal">
          <RouterProvider router={router} />
          <Toaster position="top-center" />
        </ParallaxProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
