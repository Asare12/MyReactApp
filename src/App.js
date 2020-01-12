import React from "react";
import "./App.css";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import Routes from "./routes";
import { Layout } from "./components/layout";

function App() {
  const [isAuthenticated, userHasAuthenticated] = React.useState(false);
  return (
    <React.Fragment>
      <Navigation isAuthenticated={isAuthenticated} />
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
      <Layout></Layout>
      <Footer />
    </React.Fragment>
  );
}

export default App;
