import styled from "styled-components";
import { Button } from "../button/Button";

const ApplyInfoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  height: 570px;
  margin-top: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 510px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    height: 603px;
  }
`;

const ApplyInfoBox = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 730px;
  height: 413px;
  margin-left: -70px;
  padding: 64px;
  gap: 32px;
  z-index: 2;
  align-self: self-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 514px;
    height: 375px;
    gap: 24px;
    padding: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 350px;
    height: 375px;
    padding: 30px;
    margin-left: unset;
    margin-top: -84px;
    align-self: center;
    text-align: center;
    gap: 20px;
    align-items: center;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  right: 40px;
  z-index: 3;
  bottom: -80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const ApplyInfoTitle = styled.h1`
  font-size: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 32px;
  }
`;

const ApplyInfoButton = styled(Button)`
  width: 190px;
`;

const BodyText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: ${({ theme }) => theme.lineHeights.body};
  font-family: ${({ theme }) => theme.fonts.body};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

const FounderImage = styled.img`
  width: 477px;
  height: 477px;
  z-index: 2;
  align-self: self-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-self: center;
  }
`;

export default function ApplyInfo() {
  return (
    <ApplyInfoWrapper id="apply">
      <FounderImage
        src={process.env.PUBLIC_URL + "/assets/image-founder.webp"}
        alt="Company Founder"
      />
      <ApplyInfoBox>
        <ApplyInfoTitle>Be the first to test</ApplyInfoTitle>
        <BodyText>
          <p>
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company.
          </p>
          <p>Apply for access below and I’ll be in touch to schedule a call.</p>
        </BodyText>
        <BodyText></BodyText>
        <ApplyInfoButton>Apply for access</ApplyInfoButton>
        <BackgroundImage src="/assets/bg-pattern-3.svg" alt="Background" />
      </ApplyInfoBox>
    </ApplyInfoWrapper>
  );
}
