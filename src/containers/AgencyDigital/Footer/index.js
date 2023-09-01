import React from "react";
import Fade from "react-reveal/Fade";

import Container from "common/components/UI/ContainerTwo";
import Link from "common/components/Link";
import {
  Section,
  FooterTop,
  FooterWidget,
  FooterBottom,
  Copyright,
  FooterNav,
} from "./footer.style";
import { data } from "common/data/AgencyDigital";
import logo from "common/assets/image/agencyDigital/logo.png";

const Footer = () => {
  return (
    <Section>
      <Container>
        <div style={{ display: "flex" }}>
          <div style={{ padding: "10px", width: "30%" }}>
            Reload is a company that specializes in online bill payments. We're
            establishing an environment that will allow people to pay there
            bills online fast and very reliable.
          </div>
          <div style={{ padding: "10px", width: "30%" }}>
            <h4>Contact</h4>
            RELOAD BLUEPRINT, 42 Old aba road, Rumuomasi, Port Harcourt , Rivers
            State
          </div>
          <FooterTop>
            {data.footer.map((item) => (
              <Fade key={item.id} up delay={100 * item.id}>
                <FooterWidget key={item.id}>
                  <h4>{item.title}</h4>
                  <ul>
                    {item.list.map((item) => (
                      <li className="widgetListItem" key={item.id}>
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </FooterWidget>
              </Fade>
            ))}
          </FooterTop>
        </div>
        <FooterBottom>
          <Copyright>
            <img
              src="https://www.reload.ng/reloadng/static/media/logo.7291466eadcb78486d77.png"
              alt="Agency Digital"
            />
            Copyright &copy; {new Date().getFullYear()} by Redq, Inc
          </Copyright>
          {/* <FooterNav>
            {data.footerNav.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </FooterNav> */}
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
