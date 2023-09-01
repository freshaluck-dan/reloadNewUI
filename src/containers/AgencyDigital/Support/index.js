import React from "react";
import { Icon } from "react-icons-kit";
import { iosArrowThinRight } from "react-icons-kit/ionicons/iosArrowThinRight";
import { rgba } from "polished";

import Container from "common/components/UI/ContainerTwo";
import NextImage from "common/components/NextImage";
import illustration from "common/assets/image/agencyDigital/support_illustration.png";
import { data } from "common/data/AgencyDigital";
import Section, {
  ContentWrapper,
  Content,
  HelpBlock,
  Illustration,
} from "./support.style";

const Support = () => {
  return (
    <Section id="contact">
      <Container>
        <ContentWrapper>
          <Content>
            <h2>Do you need help? Our support team are ready to help you</h2>
            <p>Having issues with payment or finding a product</p>
            {/* {data.helps.map((help) => ( */}
            {/* <HelpBlock key={help.id}> */}
            <HelpBlock>
              {/* <div className="icon">
                  <NextImage src={help.icon} alt={help.title} />
                </div> */}
              <div className="content">
                <h4>
                  <br />
                  Send a mail to: info@reload.ng
                </h4>
                Or
                <h4>
                  Call us: <br />
                  08035001523
                </h4>
              </div>
            </HelpBlock>
            {/* ))} */}
          </Content>
          <Illustration>
            <img
              src="https://www.reload.ng/reloadng/static/media/2.4e53c8f2b704c8787780.jpeg"
              alt="..."
            />
          </Illustration>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Support;
