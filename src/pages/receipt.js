import InvoiceTemplate from "containers/Invoice/invoice";
import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/agencyDigital";
import ResetCSS from "common/assets/css/style";
import {
  GlobalStyle,
  ContentWrapper,
} from "containers/AgencyDigital/agencyDigital.style";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/AgencyDigital/Navbar";
import Footer from "containers/AgencyDigital/Footer";

export default function receipt() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Head>
            <title>Agency Digital | A react next landing page</title>
            <meta name="theme-color" content="#FF825C" />
            <meta name="Description" content="React next landing page" />

            {/* Load google fonts */}
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Arvo:400,400i,700,700i|DM+Sans:400,400i,500,500i,700,700i&display=swap"
            />
          </Head>
          <ResetCSS />
          <GlobalStyle />
          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
            {/* daniel */}
            <InvoiceTemplate />
            <Footer />
          </ContentWrapper>
        </Fragment>
      </ThemeProvider>
    </>
  );
}
