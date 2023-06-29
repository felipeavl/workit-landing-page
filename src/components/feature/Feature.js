import React from "react";
import styled from "styled-components";

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 24px;
  }
`;

const FeatureNumber = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.davysGray};
  color: ${({ theme }) => theme.colors.darkPurple};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 24px;
  padding: 5px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
`;

const FeatureTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: center;
  }
`;

const FeatureTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.headingSmall};
  line-height: ${({ theme }) => theme.lineHeights.headingSmall};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-top: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.headingSmallTablet};
  }
`;

const FeatureText = styled.p`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: ${({ theme }) => theme.lineHeights.body};
  margin-top: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

const Feature = ({ featureNumber, title, text }) => (
  <FeatureContainer>
    <FeatureNumber>{featureNumber}</FeatureNumber>
    <FeatureTextWrapper>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureText>{text}</FeatureText>
    </FeatureTextWrapper>
  </FeatureContainer>
);

export default Feature;
