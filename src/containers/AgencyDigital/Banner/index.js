import React from "react";
import Text from "common/components/Text";
import Input from "common/components/Input";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Container from "common/components/UI/ContainerTwo";
import Section, {
  ContentWrapper,
  BannerContent,
  Subscribe,
  SponsoredBy,
  ImageGroup,
} from "./banner.style";

import paypal from "common/assets/image/agencyDigital/paypal.png";
import google from "common/assets/image/agencyDigital/google.png";
import dropbox from "common/assets/image/agencyDigital/dropbox.png";
import { useDispatch, useSelector } from "react-redux";
import { SearchProducts } from "_action/searchAction";

const Banner = ({ ranking }) => {
  const seachDetails = useSelector((state) =>
    state.search.listProducts ? state.search.listProducts.product : []
  );
  const [values, setValues] = React.useState("");
  const dispatch = useDispatch();
  const [searchStart, setSearchStart] = React.useState(false);
  const onInputChange = (event) => {
    console.log(event);
    // if (event.target.value.length === 0) {
    //   setSearchStart(false);
    // } else if (event.target.value.length >= 3) {
    if (event !== "") {
      setSearchStart(true);
      setValues(event);
      const values = {
        searchValue: event,
      };
      dispatch(SearchProducts(values));
    }
    // }
  };
  return (
    <Section id="home">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading as="h2" content="Reload.ng Easy Payment" />

            <Text
              className="banner-caption"
              content="Top up phone airtime or internet data. Pay electricity bills; renew TV subscriptions."
            />

            {/* <Subscribe>
              <Input
                inputType="email"
                placeholder="Search products"
                iconPosition="left"
                aria-label="email"
                value={values}
                onChange={onInputChange}
              />
              {searchStart === true ? (
                <ul id="results" className="list-group" style={{ zIndex: 2 }}>
                  {seachDetails ? (
                    seachDetails.map((option, index) => {
                      return (
                        <div className="">
                          {option.productId.billerCode === "STARTIMES_BASIC" ||
                          option.productId.billerCode === "KEDCO" ||
                          option.productId.billerCode === "IBEDC_F" ||
                          option.productId.billerCode === "NTELBundle" ||
                          option.productId.billerCode === "JAMB" ||
                          option.productId.billerCode === "SPECTRANET" ||
                          option.productId.billerCode === "SMILE" ||
                          option.productId.billerCode === "SHOWMAX" ||
                          option.productId.billerCode === null ? (
                            <button
                              type="button"
                              key={index}
                              onClick={(e) => {
                                handleMove({
                                  otherData: option,
                                });
                              }}
                              className="list-group-item list-group-item-action"
                              disabled
                            >
                              <img
                                width="60"
                                src={option.productId.logourl}
                                alt="..."
                              />
                              <span className="ml-5">Unavailable</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              key={index}
                              onClick={(e) => {
                                handleMove({
                                  otherData: option,
                                });
                              }}
                              className="list-group-item list-group-item-action"
                            >
                              <img
                                width="40"
                                src={option.productId.logourl}
                                alt="..."
                              />
                              {option.productId.productname}
                            </button>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="list-group-item list-group-item-action text-center">
                      No items found.
                    </div>
                  )}
                </ul>
              ) : (
                ""
              )}
              <Button title="Search" type="submit" />
            </Subscribe> */}

            <SponsoredBy>
              <Text className="sponsoredBy" content="Top Billers" />
              {/* <ImageGroup> */}
              {/* </ImageGroup> */}
            </SponsoredBy>
            <SponsoredBy>
              {ranking.map((allData, i) => (
                <div key={i}>
                  <div style={{ display: "flex" }}>
                    {/* {console.log(allData)} */}
                    <img
                      // style={{ margin: "0", padding: "10px" }}
                      src={allData.product.logourl}
                      alt="..."
                      width={60}
                      height={60}
                    />
                  </div>
                  <p style={{ margin: "0", padding: "10px" }}>
                    {allData.product.billerCode}
                  </p>
                </div>
              ))}
            </SponsoredBy>
          </BannerContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
