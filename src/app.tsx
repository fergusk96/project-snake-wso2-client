import { AuthProvider, useAuthContext } from "@asgardeo/auth-react";
import React, { FunctionComponent, ReactElement } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./error-boundary";
import { HomePage , NotFoundPage } from "./pages";
import "./styles/globals.css";

const AppContent: FunctionComponent = (): ReactElement => {
    const { error } = useAuthContext();

    return (
        <ErrorBoundary error={error}>
            <Router>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route element={ <NotFoundPage /> } />
            </Routes>
        </Router>
        </ErrorBoundary>
    )
};

const App = () => (
    <AuthProvider
    config={ {
      signInRedirectURL: 'https://project-snake-wso2-client.vercel.app/',
      signOutRedirectURL: 'https://project-snake-wso2-client.vercel.app/',
      clientID: 'HYhRmP11tDsI91TzcdRr1vqSy1Qa',
      baseUrl: 'https://legally-measured-griffon.ngrok-free.app',
      scope: ['openid', 'profile'],
    } }
  >
        <AppContent />
    </AuthProvider>
);

render((<App />), document.getElementById("root"));
