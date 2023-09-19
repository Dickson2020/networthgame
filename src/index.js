import React from "react";
import ReactDOM from "react-dom/client";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DynamicContextProvider
      settings={{
        environmentId: "e2196efe-7a6d-4ac9-9d95-4f720090ea0a",
      }}
    >
      <App />
    </DynamicContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
