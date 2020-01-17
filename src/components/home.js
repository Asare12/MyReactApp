import React from "react";
import { TopContent } from "./top-content";
import AboutSection from "./aboutSection";
import ServiceSection from "./serviceSection";
import TeamSection from "./teamSection";
import MembershipSection from "./membershipSection";
import ContactSection from "./contactSection";
import "../componentsCSS/home.css";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          <header className="top-content ">
            <TopContent />
          </header>
          <AboutSection />
          <ServiceSection />
          <TeamSection />
          <MembershipSection />
          <ContactSection />
        </div>
      </React.Fragment>
    );
  }
}
