import React from "react";
import { DefaultLayout } from "../layouts/default";

interface VerifyIDTokenFailureProps {
  error?: { message?: string; name?: string };
}

/**
 * Page to display for ID token verifying failures Page.
 *
 * @param {VerifyIDTokenFailureProps} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const VerifyIDTokenFailure: React.FC<VerifyIDTokenFailureProps> = ({ error }) => {
  return (
    <DefaultLayout>
      <h6 className="error-page_h6">
        ID token validation failed!
      </h6>
      <p className="error-page_p">
        Issue occurred while verifying ID token.
      </p>
      {error && (
        <p className="error-page_p">
          Error message : {error.message}
          <br />
          Error reason : {error.name}
        </p>
      )}
    </DefaultLayout>
  );
};