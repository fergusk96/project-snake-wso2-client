"use client";

import { BasicUserInfo, useAuthContext } from "@asgardeo/auth-react";
import React, { FunctionComponent, ReactElement, useCallback, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";

export const LoginButton: FunctionComponent = (): ReactElement => {
  interface DerivedState {
    authenticateResponse: BasicUserInfo;
    idToken: string[];
    decodedIdTokenHeader: string;
    decodedIDTokenPayload: Record<string, string | number | boolean>;
  }


  const {
    state,
    signIn,
    signOut,
    getBasicUserInfo,
    getIDToken,
    getDecodedIDToken,
    on,
  } = useAuthContext();

  const [derivedAuthenticationState, setDerivedAuthenticationState] = useState<DerivedState>(null);
  const [hasAuthenticationErrors, setHasAuthenticationErrors] = useState<boolean>(false);
  const [hasLogoutFailureError, setHasLogoutFailureError] = useState<boolean>(false);

  useEffect(() => {

    if (!state?.isAuthenticated) {
      return;
    }

    (async (): Promise<void> => {
      const basicUserInfo = await getBasicUserInfo();
      const idToken = await getIDToken();
      const decodedIDToken = await getDecodedIDToken();

      const derivedState: DerivedState = {
        authenticateResponse: basicUserInfo,
        idToken: idToken.split("."),
        decodedIdTokenHeader: JSON.parse(atob(idToken.split(".")[0])),
        decodedIDTokenPayload: decodedIDToken
      };

      setDerivedAuthenticationState(derivedState);
    })();
  }, [state.isAuthenticated, getBasicUserInfo, getIDToken, getDecodedIDToken]);

  const handleLogin = useCallback(() => {
    setHasLogoutFailureError(false);
    signIn().catch(() => setHasAuthenticationErrors(true));
  }, [signIn]);

   const handleLogout = useCallback(() => {
    setHasAuthenticationErrors(false);
    signOut().catch(() => setHasLogoutFailureError(true));
  }, [signOut]);

  return state?.isAuthenticated ? (
    <Button
      onClick={handleLogout}
      variant="outline"
      size="sm"
      className="border-red-500/50 hover:bg-red-500/10 text-red-400"
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sign Out
    </Button>
  ) : (
    <Button
      onClick={handleLogin}
      variant="outline"
      size="sm"
      className="border-red-500/50 hover:bg-red-500/10 text-red-400"
    >
      <LogIn className="mr-2 h-4 w-4" />
      Login
    </Button>
  );
};