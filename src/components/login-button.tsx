"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export const LoginButton: React.FC = () => {
  const { login, logout, user, isAuthenticated, isLoading } = useKindeAuth();

  if (isLoading) {
    return <Button disabled>Loading...</Button>;
  }

  return isAuthenticated ? (
    <Button
      onClick={logout}
      variant="outline"
      size="sm"
      className="border-red-500/50 hover:bg-red-500/10 text-red-400"
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sign Out
    </Button>
  ) : (
    <Button
      onClick={login}
      variant="outline"
      size="default"
      className="border-red-500/50 hover:bg-red-500/10 text-red-400"
    >
      <LogIn className="mr-2 h-4 w-4" />
      Login
    </Button>
  );
};