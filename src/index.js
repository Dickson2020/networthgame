import React from "react";
import ReactDOM from "react-dom/client";
import { DynamicWidget, DynamicEmbeddedWidget, useUserWallets,DynamicContextProvider  } from "@dynamic-labs/sdk-react-core";
import "./index.css";
import App from "./App";
import Layout from "./components/layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DynamicContextProvider
      theme="dark"
      settings={{
        environmentId: "c879278a-d3e2-4295-a59e-3ecf5a9695d3",
      }}
    >
      <Layout>
        <App />
      </Layout>
    </DynamicContextProvider>
  </React.StrictMode>
);
