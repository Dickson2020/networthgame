import React from "react";
import ReactDOM from "react-dom/client";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react";
import "./index.css";
import App from "./App";
import Layout from "./components/layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DynamicContextProvider
      theme="dark"
      settings={{
        environmentId: process.env.REACT_APP_ENV_ID,
      }}
    >
      <Layout>
        <App />
      </Layout>
    </DynamicContextProvider>
  </React.StrictMode>
);
