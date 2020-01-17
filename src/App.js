import React from "react";
import "./App.css";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import Routes from "./routes";
import { Layout } from "./components/layout";
import { withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";

function App() {
  const [isAuthenticating, setIsAuthenticating] = React.useState(true);
  const [isAuthenticated, userHasAuthenticated] = React.useState(false);

  React.useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating && (
      <React.Fragment>
        <Navigation isAuthenticated={isAuthenticated} />
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
        <Footer />
      </React.Fragment>
    )
  );
}

export default withRouter(App);
