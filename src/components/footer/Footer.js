import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 4rem;
  gap: 2rem;
`;

const Logo = styled.img`
  width: 95px;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 2rem;
  cursor: pointer;
`;

const SocialMediaIcon = styled.img`
  width: 24px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Logo
        src={process.env.PUBLIC_URL + "/assets/logo-dark.svg"}
        alt="Company Logo"
      />
      <SocialMediaIcons>
        <SocialMediaIcon
          src={process.env.PUBLIC_URL + "/assets/icon-facebook.svg"}
          alt="Facebook"
        />
        <SocialMediaIcon
          src={process.env.PUBLIC_URL + "/assets/icon-instagram.svg"}
          alt="Instagram"
        />
        <SocialMediaIcon
          src={process.env.PUBLIC_URL + "/assets/icon-twitter.svg"}
          alt="Twitter"
        />
      </SocialMediaIcons>
    </FooterWrapper>
  );
}
