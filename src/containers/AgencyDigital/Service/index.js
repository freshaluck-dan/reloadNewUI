import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Container from "common/components/UI/ContainerTwo";
import BlogPost from "common/components/BlogPost";
import SectionHeading from "../SectionHeading";
import Section, { ServiceWrapper } from "./service.style";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GoRocket } from "react-icons/go";

const Service = () => {
  return (
    <Section id="service">
      <Container>
        <Zoom>
          <SectionHeading
            slogan="Reload.ng stands as Nigeria's premier payment platform, offering a
            swift and convenient online payment resolution for a vast number of
            individuals. Our mission revolves around simplifying the payment
            process for everyday services, thus positively influencing lives.
            Reload.ng enables seamless and prompt transactions, accessible from
            any device and at any moment."
            title="Why Choose Us"
          />
        </Zoom>
        <ServiceWrapper>
          <Fade up delay={100}>
            <BlogPost
              className="serviceItem"
              ThumbUrl={<BiSupport size={30} />}
              title="Excellent Customer Support"
              excerpt="Our well trained customer support agents are always available 24/7
              to help you resolve any issues. We provide you with multiple ways
              to reach us and get fast help."
            />
          </Fade>
          <Fade up delay={100}>
            <BlogPost
              className="serviceItem"
              ThumbUrl={<GoRocket size={30} />}
              title="Fast Service Delivery"
              excerpt="Enjoy prompt delivery of services purchased through Reloadng.
              Our promise to you is to deliver value for every transaction
              made on-time, every time."
            />
          </Fade>
          <Fade up delay={100}>
            <BlogPost
              className="serviceItem"
              ThumbUrl={<RiSecurePaymentFill size={30} />}
              title="Safe, Secured Payment"
              excerpt="Payment on Reloadng is fast and 100% secured. Enjoy seamless
              payment processes with zero glitches. Pay with wallet, bank
              transfer or card."
            />
          </Fade>
          {/* ))} */}
        </ServiceWrapper>
      </Container>
    </Section>
  );
};

export default Service;
