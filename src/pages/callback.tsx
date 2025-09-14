import React from "react";
import { useNavigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function CallbackPage() {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useKindeAuth();

  React.useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1>Checking authentication…</h1>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1>Not authenticated. Please try logging in again.</h1>
      </div>
    );
  }

  // If authenticated, useEffect will redirect, so render nothing
  return null;
}
