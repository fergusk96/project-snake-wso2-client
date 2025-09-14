import React from "react";
import { useNavigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function CallbackPage() {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useKindeAuth();

  React.useEffect(() => {
    // Once Kinde finishes processing the redirect and user is authenticated (or not),
    // navigate to the appropriate page. Adjust as needed for your app's flow.
    if (!isLoading) {
      if (isAuthenticated) {
        navigate("/", { replace: true });
      } else {
        // If not authenticated after callback, you may want to keep the user here
        // or send them to a dedicated error page.
        // For now, send to home; update if you add an auth error page.
        navigate("/notfound", { replace: true });
      }
    }
  }, [isLoading, isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
      <div className="text-center">
        <div className="animate-spin inline-block h-12 w-12 border-4 border-red-600 border-t-transparent rounded-full mb-6" />
        <h1 className="text-2xl font-semibold">Finishing sign-in…</h1>
        <p className="text-gray-400 mt-2">Please wait while we process your login.</p>
      </div>
    </div>
  );
}
