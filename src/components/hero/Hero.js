import styled from "styled-components";
import { Button } from "../button/Button";
import Header from "../header/Header";
import HeroImage from "./../../assets/image-hero.webp";

export const HeroWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  background-image: url(${process.env.PUBLIC_URL + "/assets/bg-pattern-1.svg"}),
    url(${process.env.PUBLIC_URL + "/assets/bg-pattern-2.svg"});
  background-position: -150px 115px, calc(100% + 60px) calc(100% - 235px);
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.white};
  height: 730px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 540px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-image: none;
    height: 480px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CurvedSVG = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  zindex: 1;
  path {
    fill: ${({ theme }) => theme.colors.ghostWhite};
  }
`;

const LearnMoreButton = styled(Button)`
  margin-top: 37px;
`;

const HeroImageWrapper = styled.img`
  width: 767px;
  height: 441px;
  margin-top: 46px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 470px;
    height: 270px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 293px;
    height: 169px;
  }
`;

const UnderlinedSpan = styled.span`
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.eucalyptus},
    ${({ theme }) => theme.colors.eucalyptus}
  );
  background-size: 100% 6px;
  background-repeat: no-repeat;
  background-position: 0% 92%;
`;

const TituloH1 = styled.h1`
  font-family: "Fraunces", serif;
  font-weight: 600;
  font-size: 80px;
  line-height: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 56px;
    line-height: 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 50px;
    line-height: 56px;
    padding: 0 10px;
  }
`;

export default function Hero({ onLearnMore, onApplyForAccess }) {
  return (
    <HeroWrapper>
      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Header onApplyForAccess={onApplyForAccess}></Header>

        <HeroContent>
          <TituloH1>
            Data <UnderlinedSpan>tailored</UnderlinedSpan> to your needs.
          </TituloH1>
          <LearnMoreButton onClick={onLearnMore}>Learn More</LearnMoreButton>
          <HeroImageWrapper src={HeroImage} alt="Hero" />
        </HeroContent>
      </div>
      <CurvedSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 150"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M0,0 Q720,150 1440,0 L1440,150 L0,150 Z" />
      </CurvedSVG>
    </HeroWrapper>
  );
}
