import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import React, { FunctionComponent, ReactElement } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./error-boundary";
import { HomePage , NotFoundPage } from "./pages";
import "./styles/globals.css";

const AppContent: FunctionComponent = (): ReactElement => {
    return (
        <ErrorBoundary>
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
  <KindeProvider
    clientId="3354879266344193b64d6d5a3a79073e"
    domain="https://auth.project-snake.win"
    logoutUri="https://auth.project-snake.win"
    redirectUri="https://auth.project-snake.win"
  >
    <AppContent />
  </KindeProvider>
);

render(<App />, document.getElementById("root"));