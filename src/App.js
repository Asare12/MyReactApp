import React from "react";
import "./App.css";
import { Navigation } from "./components/navigation";
// import TopContent from "./components/top-content";
// import AboutSection from "./components/aboutSection";
// import ServiceSection from "./components/serviceSection";
// import TeamSection from "./components/teamSection";
// import MembershipSection from "./components/membershipSection";
// import ContactSection from "./components/contactSection";
import { Footer } from "./components/footer";
import Routes from "./routes";
import { Layout } from "./components/layout";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      {/* <div className="App"> */}
      {/* <header className="App-header">
        <Navigation />
        <TopContent />
      </header>

      <AboutSection />

      <ServiceSection />

      <TeamSection />

      <MembershipSection />

      <ContactSection />

       */}
      {/* </div> */}
      <Routes />
      <Layout></Layout>
      <Footer />
    </React.Fragment>
  );
}

export default App;
