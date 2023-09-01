import React, { useState, useRef } from "react";
import Fade from "react-reveal/Fade";
import ScrollSpyMenu from "common/components/ScrollSpyMenu";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Icon } from "react-icons-kit";
import { androidMenu } from "react-icons-kit/ionicons/androidMenu";
import { androidClose } from "react-icons-kit/ionicons/androidClose";
import Link from "common/components/Link";
import Button from "common/components/Button";
import Logo from "common/components/UIElements/Logo";
import Container from "common/components/UI/ContainerTwo";
import { useRouter } from "next/router";
import NavbarWrapper, {
  MenuArea,
  MobileMenu,
  NavbarRight,
} from "./navbar.style";
import LogoImage from "common/assets/image/agencyDigital/logo.png";

import { data } from "common/data/AgencyDigital";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const router = useRouter();

  const scrollItems = [];

  data.navItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleHandleMenuClose = () => {
    setMobileMenu(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    router.push(`/login`);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    router.push(`/register`);
  };

  return (
    <NavbarWrapper className="agencyModern-navbar navbar">
      <Container>
        <Logo
          href="/reloadng"
          logoSrc={LogoImage}
          title="Agency Digital"
          className="main-logo"
        />
        <MenuArea>
          {router.pathname !== "/products" ? (
            <ScrollSpyMenu
              className="menu-items menu-left"
              menuItems={data.navItems}
              offset={-84}
            />
          ) : (
            ""
          )}
          <NavbarRight>
            {router.pathname === "/products" ? (
              <li>
                <Link href="#">Products</Link>
              </li>
            ) : (
              ""
            )}
            <li>
              <div style={{ cursor: "pointer" }} onClick={handleLogin}>
                Login
              </div>
              {/* <Link href={`/${process.env.contextPath}/login`}>Login</Link> */}
            </li>
            <li>
              <div style={{ cursor: "pointer" }} onClick={handleRegister}>
                Get Started
              </div>
              {/* <Link href={`/${process.env.contextPath}/register`}> */}
              {/* </Link> */}
            </li>
          </NavbarRight>
          {/* end of main menu */}

          <Button
            className="menubar"
            icon={
              mobileMenu ? (
                <Icon
                  style={{ color: "#02073E" }}
                  className="bar"
                  size={32}
                  icon={androidClose}
                />
              ) : (
                <Fade>
                  <Icon
                    style={{ color: "#02073E" }}
                    className="close"
                    icon={androidMenu}
                    size={32}
                  />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={handleMobileMenu}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${mobileMenu ? "active" : ""}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {data.navItems.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleHandleMenuClose}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
            <li>
              <Link href="#">Login</Link>
            </li>
            <li>
              <Link href="#">Get Started</Link>
            </li>
          </Scrollspy>
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
