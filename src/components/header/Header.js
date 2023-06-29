import React from "react";
import styled from "styled-components";
import { SecondaryButton } from "../secondary-button/SecondaryButton";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 57px 165px;
  background-color: ${({ theme }) => theme.colors.darkPurple};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 30px 20px;
  }
`;

const Logo = styled.img`
  height: 24px;
`;

const Header = ({ onApplyForAccess }) => {
  return (
    <HeaderContainer>
      <Logo
        src={process.env.PUBLIC_URL + "/assets/logo-light.svg"}
        alt="Company Logo"
      />
      <SecondaryButton onClick={onApplyForAccess}>
        Apply for Access
      </SecondaryButton>
    </HeaderContainer>
  );
};

export default Header;
