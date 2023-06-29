import styled from "styled-components";
import Feature from "../feature/Feature";

const FeatureWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.ghostWhite};
  color: ${({ theme }) => theme.colors.darkPurple};
  position: relative;
  padding-top: 265px;
  padding-bottom: 90px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 140px;
    padding-bottom: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 30px;
    padding-bottom: 35px;
  }
`;

const FeaturesListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0px 45px;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: 0 97px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 0 16px;
    gap: 40px;
  }
`;

const CurvedSVG = styled.svg`
  position: absolute;
  left: 0;
  width: 100%;
  zindex: 1;
  path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export default function Features() {
  return (
    <FeatureWrapper id="features">
      <FeaturesListWrapper>
        <Feature
          featureNumber="1"
          title="Actionable insights"
          text="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
        />
        <Feature
          featureNumber="2"
          title="Data-driven decisions"
          text="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
        />
        <Feature
          featureNumber="3"
          title="Always affordable"
          text="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
        />
      </FeaturesListWrapper>
      <CurvedSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 150"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M0,0 Q720,150 1440,0 L1440,150 L0,150 Z" />
      </CurvedSVG>
    </FeatureWrapper>
  );
}
