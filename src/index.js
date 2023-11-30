import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from "./components/error/error";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage} onReset={() => (window.location.href = '/')}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
