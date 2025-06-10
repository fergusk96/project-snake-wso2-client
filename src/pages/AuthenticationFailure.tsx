import React, { useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { DefaultLayout } from "../layouts/default";

/**
 * Page to display Authentication Failure Page.
 *
 * @return {React.ReactElement}
 */
export const AuthenticationFailure: React.FC = () => {
  const { login } = useKindeAuth();
  const [hasAuthenticationErrors, setHasAuthenticationErrors] = useState(false);

  const handleLogin = async () => {
    try {
      await login();
    } catch {
      setHasAuthenticationErrors(true);
    }
  };

  return (
    <DefaultLayout hasErrors={hasAuthenticationErrors}>
      <div className="content">
        <div className="ui visible negative message">
          <div className="header"><b>Authentication Error!</b></div>
          <p>Please check application configuration and try login again!.</p>
        </div>
        <button className="btn primary" onClick={handleLogin}>Login</button>
      </div>
    </DefaultLayout>
  );
};